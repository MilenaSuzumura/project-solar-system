const missionsService = require('../services/missions.services');

const getAllMissions = async (_req, res) => {
  const missions = await missionsService.getAllMissions();

  return res.status(200).json(missions);
};

module.exports = { getAllMissions };