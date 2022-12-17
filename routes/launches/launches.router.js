const express = require("express");

const { getAllLaunches } = require("../../controllers");

const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
