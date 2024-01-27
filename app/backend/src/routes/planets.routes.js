const { Router } = require('express');
const planetsController = require('../controllers/planets.controllers');

const planetsRouter = Router();

planetsRouter.get('/', planetsController.getAllPlanets);

module.exports = planetsRouter;
