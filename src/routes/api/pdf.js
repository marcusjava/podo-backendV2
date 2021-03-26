const { Router } = require("express");

const routes = Router();

const PdfController = require("../../controllers/PdfController");

routes.get("/consults", PdfController.getConsultsPDF);

module.exports = routes;
