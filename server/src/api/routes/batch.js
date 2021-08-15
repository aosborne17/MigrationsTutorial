const express = require("express");
const { BatchController } = require("../controllers/batch");

const router = express.Router();

router.post("/allocate", BatchController.allocate);

module.exports = {
  batchRoutes: router,
};
