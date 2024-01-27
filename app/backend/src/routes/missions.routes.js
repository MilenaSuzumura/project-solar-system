const { Router } = require('express');
const missionsController = require('../controllers/missions.controllers');

const missionsRouter = Router();

missionsRouter.get('/', missionsController.getAllMissions);

module.exports = missionsRouter;
