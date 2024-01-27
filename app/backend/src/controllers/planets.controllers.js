const planetsService = require('../services/planets.services');

const getAllPlanets = async (_req, res) => {
  const planets = await planetsService.getAllPlanets();

  return res.status(200).json(planets);
};

module.exports = { getAllPlanets };
