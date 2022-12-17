const { getAllPlanets } = require("./planets/planets.controller");
const { getAllLaunches } = require("./launches/launches.controller");

module.exports = {
  getAllPlanets,
  getAllLaunches,
};
