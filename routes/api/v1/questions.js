const express = require('express');
const router = express.Router();


const questionsController = require('../../../controllers/api/v1/question_controllers');
const optionsController = require('../../../controllers/api/v1/option_controllers');

router.post('/create', questionsController.create);
router.post('/:id/options/create', optionsController.create);

module.exports = router;