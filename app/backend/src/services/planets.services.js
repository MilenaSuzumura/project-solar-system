const planetsModel = require('../callModels/planets.callModels');

const getAllPlanets = async () => [...await planetsModel.getAllPlanets()];

module.exports = { getAllPlanets };