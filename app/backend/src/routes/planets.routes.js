const { Router } = require('express');
const planetsController = require('../controllers/planets.controllers');

const planetsRouter = Router();

planetsRouter.get('/', planetsController.getAll);

module.exports = planetsRouter;