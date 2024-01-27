const express = require('express');
const planetsRouter = require('./routes/planets.routes');
const missionsRouter = require('./routes/missions.routes');

const app = express();

app.use(express.json());

app.use('/planets', planetsRouter);
app.use('/missions', missionsRouter);

module.exports = app;