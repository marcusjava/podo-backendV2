const mongoose = require("mongoose");
const mongoose_populate = require("mongoose-autopopulate");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const History = require("./ConsultHistory");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const aws = require("aws-sdk");

const s3 = new aws.S3();

dayjs.extend(utc);

const ConsultSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "Campo obrigatorio"],
    },
    end_date: {
      type: Date,
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client",
      autopopulate: true,
    },
    procedures: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Procedure",
        autopopulate: true,
      },
    ],
    observations: {
      type: String,
    },
    price: {
      type: String,
    },
    photos: [
      {
        name: String,
        size: Number,
        key: String,
        url: String,
      },
    ],
    //0 - Agendada 1 - Retorno 2 - Urgencia
    type_consult: {
      type: String,
      enum: ["Agendada", "Retorno", "Urgencia"],
      default: "Agendada",
    },
    anamnese: mongoose.Schema.Types.Mixed,
    //{
    // 	alergia: {
    // 		option: {
    // 			type: Boolean,
    // 			default: false,
    // 		},
    // 		description: { type: String },
    // 	},
    // 	calcado: {
    // 		num: {
    // 			type: String,
    // 		},
    // 		tipo: {
    // 			type: String,
    // 		},
    // 		material: {
    // 			type: String,
    // 		},
    // 	},
    // 	cardiopata: {
    // 		type: Boolean,
    // 		default: false,
    // 	},
    // 	desc_proc: { type: String },
    // 	diabetico: {
    // 		type: Boolean,
    // 		default: false,
    // 	},
    // 	diabetico_familia: {
    // 		type: Boolean,
    // 		default: false,
    // 	},

    // 	doenca: {
    // 		option: {
    // 			type: Boolean,
    // 			default: false,
    // 		},
    // 		description: { type: String },
    // 	},
    // 	dst: {
    // 		type: Boolean,
    // 		default: false,
    // 	},
    // 	esporte: {
    // 		option: {
    // 			type: Boolean,
    // 			default: false,
    // 		},
    // 		qt: {
    // 			type: String,
    // 		},
    // 	},
    // 	etilista: {
    // 		type: Boolean,
    // 		default: false,
    // 	},

    // 	exame_fisico: {
    // 		monofilamento: { type: String },
    // 		diapasao: { type: String },
    // 		digitopressao: { type: String },
    // 		pulsos: { type: String },
    // 	},
    // 	fumante: {
    // 		type: Boolean,
    // 		default: false,
    // 	},
    // 	grav_lact: {
    // 		type: Boolean,
    // 		default: false,
    // 	},

    // 	hipertensao: {
    // 		type: Boolean,
    // 		default: false,
    // 	},
    // 	medicamento: {
    // 		option: {
    // 			type: Boolean,
    // 			default: false,
    // 		},
    // 		description: { type: String },
    // 	},
    // 	motivo: {
    // 		type: String,
    // 	},
    // 	orto_lesoes: {
    // 		dedos_garra: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		esporao_calcaneo: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		halux_rigidus: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		halux_valgus: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		tipo_pe: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		tipos_de_pisada: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		tipos_dedos: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		tipos_joelho: [
    // 			{
    // 				type: String,
    // 			},
    // 		],

    // 		outros: { type: String },
    // 	},
    // 	pe_predominante: {
    // 		type: String,
    // 	},
    // 	pele_lesoes: {
    // 		anidrose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		bromidrose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		calos: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		desidrose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		fissuras: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		hiperhidrose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		isquemia: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		mal_perfurante: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		psoriase: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		tinea_pedis: [
    // 			{
    // 				type: String,
    // 			},
    // 		],

    // 		outros: { type: String },
    // 	},
    // 	unhas_formato: {
    // 		normal: [{ type: String }],
    // 		involuta: [{ type: String }],
    // 		telha: [{ type: String }],
    // 		funil: [{ type: String }],
    // 		gancho: [{ type: String }],
    // 		caracol: [{ type: String }],
    // 		torques: [{ type: String }],
    // 	},
    // 	unhas_lesoes: {
    // 		alter_cor: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		exostose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		granuloma: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicoatrofia: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicocriptose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicofose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicogrifose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicolise: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicomadese: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicomicose: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		onicorrexe: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		psoriase: [
    // 			{
    // 				type: String,
    // 			},
    // 		],
    // 		outros: {
    // 			type: String,
    // 		},
    // 	},

    // 	outros: {
    // 		type: String,
    // 	},

    // 	joelhos_tipos: [
    // 		{
    // 			value: String,
    // 			label: String,
    // 		},
    // 	],
    // },
    //{ value: 0, label: 'Marcada' }
    //{ value: 1, label: 'Realizada' }
    //{ value: 2, label: 'Cancelada' }
    //{ value: 3, label: 'Remarcada' }
    status: {
      type: String,
      enum: ["Marcada", "Realizada", "Cancelada", "Remarcada"],
      default: "Marcada",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

ConsultSchema.post("save", async (doc) => {
  await History.create({
    o: "i",
    docId: doc._id,
    d: doc,
  });
});

ConsultSchema.post("findOneAndUpdate", async (doc) => {
  await History.create({
    o: "u",
    docId: doc._id,
    d: doc,
  });
});

ConsultSchema.plugin(mongoose_populate);

ConsultSchema.pre("remove", function () {
  if (process.env.STORAGE_TYPE === "s3") {
    return s3
      .deleteObject({
        Bucket: "podobucket",
        Key: this.key,
      })
      .promise();
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, "..", "..", "uploads", this.key)
    );
  }
});

module.exports = mongoose.model("Consult", ConsultSchema);
