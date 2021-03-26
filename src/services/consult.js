const Consult = require("../models/Consult");
const ObjectToString = require("../utils/ObjectToString");
const dayjs = require("dayjs");

const getList = async (params, callback) => {
  const { start, end, status, client, client_id, all, limit } = params;
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

  if (status !== undefined) {
    condition.status = status;
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
        return callback(error, null);
      }

      return callback(null, consults);
    });
};

module.exports = { getList };
