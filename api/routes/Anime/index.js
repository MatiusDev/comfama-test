const { Router } = require('express');

const { getAverageScores } = require('../../controllers/anime');

const validParams = require('../../middlewares/validParams');

const rt = Router();

rt.post('/recommendation', validParams, getAverageScores);

module.exports = rt;