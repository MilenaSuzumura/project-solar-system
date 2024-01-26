const { Router } = require('express');
const { Planet } = require('../models');

const planetsRouter = Router();

planetsRouter.get('/', async (_req, res) => {
    const test = await Planet.findAll({ raw: true });
    console.log(test);
    return res.status(200).json(test);
});

module.exports = planetsRouter;