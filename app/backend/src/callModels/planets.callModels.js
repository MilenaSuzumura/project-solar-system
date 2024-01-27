const { Planet } = require('../models');

const getAllPlanets = async () => Planet.findAll({ raw: true });

module.exports = {
  getAllPlanets,
};