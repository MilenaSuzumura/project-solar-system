const missionsModel = require('../callModels/missions.callModels');

const getAllMissions = async () => [... await missionsModel.getAllMissions()];

module.exports = { getAllMissions };