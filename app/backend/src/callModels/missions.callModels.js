const { Mission } = require('../models');

const getAllMissions = async () => Mission.findAll({ raw: true });

module.exports = { getAllMissions };