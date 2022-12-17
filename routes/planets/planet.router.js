const express = require("express");

const { getAllPlanets } = require("../../controllers");

const planetRouter = express.Router();

planetRouter.get("/planets", getAllPlanets);

module.exports = planetRouter;
