const planetsModel = require('../callModels/planets.callModels');

const getAllPlanets = async () => {
  return planetsModel.getAllPlanets();
}

module.exports = { getAllPlanets };
