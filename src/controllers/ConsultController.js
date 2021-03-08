const Consult = require("../models/Consult");
const Client = require("../models/Client");
const ConsultHistory = require("../models/ConsultHistory");
const ValidateConsult = require("../validation/consult");
const ObjectToString = require("../utils/ObjectToString");
const dayjs = require("dayjs");

const create = async (req, res, next) => {
  const { errors, isValid } = ValidateConsult(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const {
    date,
    client,
    procedures,
    price,
    type_consult,
    status,
    observations,
  } = req.body;

  let consult = await Consult.findOne({ date });

  if (consult) {
    return next({
      status: 400,
      message: {
        path: "date",
        message: "Já existe consulta marcada nesta data/hora",
      },
    });
  }

  try {
    const newConsult = await Consult.create({
      date,
      client,
      procedures,
      price,
      type_consult,
      status,
      observations,
      createdBy: req.user,
    });
    return res.status(201).json(newConsult);
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  const { errors, isValid } = ValidateConsult(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const {
    date,
    client,
    procedures,
    price,
    type_consult,
    end_date,
    anamnese,
    observations,
    status,
  } = req.body;

  const { id } = req.params;

  const consult = await Consult.findById(id);

  if (!consult) {
    return next({
      status: 404,
      message: { path: "error", message: "Consulta não localizada" },
    });
  }

  Consult.findByIdAndUpdate(
    { _id: id },
    {
      date,
      end_date: !consult.end_date ? end_date : consult.end_date,
      client,
      procedures,
      price,
      type_consult,
      anamnese,
      observations,
      status,
      updatedBy: req.user,
    },
    { new: true, omitUndefined: true }
  )
    .then((doc) => {
      return res.json(doc);
    })
    .catch((error) => {
      return next(error);
    });
};

const retrieve = async (req, res, next) => {
  const { id } = req.params;

  const consult = await Consult.findById(id);

  if (!consult) {
    return next({
      status: 404,
      message: { path: "error", message: "Consulta não localizada" },
    });
  }

  return res.json(consult);
};

const list = async (req, res, next) => {
  const { start, end, status, client, client_id, all, limit = 200 } = req.query;

  let condition = {};
  let clients;

  if (!all) {
    condition.date = {
      $gte: new Date(new Date().setHours(00, 00, 00)),
    };
  }

  if (start !== undefined && end !== undefined) {
    condition.date = {
      $gte: new Date(new Date(start).setHours(00, 00, 00)),
      $lte: new Date(new Date(end).setHours(23, 59, 59)),
    };
  }

  if (client !== undefined) {
    clients = await Client.find({ name: { $regex: client, $options: "i" } });
    condition.client = { $in: clients };
  }
  if (client_id !== undefined) {
    condition.client = { _id: client_id };
  }

  Consult.find(condition)
    .sort({ date: 1 })
    .limit(limit)
    .exec((error, consults) => {
      if (error) {
        return next({
          status: 400,
          message: {
            path: "error",
            message: "Sem resultados",
          },
          originalError: error,
        });
      }

      return res.json(consults);
    });
};

const generateDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const {
      _id,
      date,
      client: { avatar, address, name, cpf, contact },
      procedures,
      anamnese,
      price,
      type_consult,
      updatedAt,
    } = await Consult.findById(id);

    const doc = {
      _id,
      date,
      avatar,
      name,
      cpf,
      contact,
      address,
      procedures: procedures.map((item) => ({
        name: item.name,
        price: item.price,
      })),
      anamnese: {
        ...anamnese,
        unhas_formato: ObjectToString(anamnese.unhas_formato),
        orto_lesoes: ObjectToString(anamnese.orto_lesoes),
        pele_lesoes: ObjectToString(anamnese.pele_lesoes),
        unhas_lesoes: ObjectToString(anamnese.unhas_lesoes),
      },
      price,
      type_consult,
      updatedAt,
    };
    return res.json(doc);
  } catch (error) {
    next({
      status: 500,
      message: {
        path: "error",
        message: "Ocorreu um erro ao gerar a ficha de consulta",
      },
    });
  }
};

const log = async (req, res, next) => {
  const { start, end } = req.query;
  const { id } = req.params;
  let condition = {};

  if (start !== undefined && end !== undefined) {
    condition.t = {
      $gte: new Date(new Date(start).setHours(00, 00, 00)),
      $lte: new Date(new Date(end).setHours(23, 59, 59)),
    };
  }

  if (id !== undefined) {
    condition.docId = id;
  }

  ConsultHistory.find(condition)
    .sort({ t: 1 })
    .limit(200)
    .exec((error, logs) => {
      if (error) {
        next({
          status: 400,
          originalError: error,
          message: {
            path: "error",
            message: "Erro ao recuperar os logs da consulta",
          },
        });
      }
      return res.json(logs);
    });
};

const getStats = async (req, res, next) => {
  const { startDate, endDate, status = "Realizada" } = req.query;
  //...(includeB && { b: 2 } )

  Consult.aggregate([
    {
      $match: {
        date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        status,
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%d-%m-%Y", date: "$date" },
        },
        status: { $first: "$status" },
        count: { $sum: 1 },
      },
    },
  ])
    .exec()
    .then((consults) => {
      return res.send(consults);
    })
    .catch((error) =>
      next({
        status: 500,
        message: {
          path: "error",
          message: "Erro ao recuperar as consultas",
        },
      })
    );
};

/* {
  _id: { 
    $dateToString: { format: "%d-%m-%Y", date: "$date" } 
  },
  count: {$sum:1}
} */

module.exports = { create, update, retrieve, list, log, generateDoc, getStats };
