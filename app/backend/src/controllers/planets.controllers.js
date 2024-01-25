const planetsService = require('../services/planets.services');

const getAll = async (_req, res) => {
  const planets = await planetsService.getAllPlanets();

  // if (planets.length == 0) return res.status().json({ message: 'Error'});

  return res.status(200).json(planets);
};

module.exports = { getAll };