const express = require('express');
const router = express.Router();

const optionsController = require('../../../controllers/api/v1/option_controllers');

router.delete('/:id/delete', optionsController.delete);
router.get('/:id/add_vote', optionsController.addVote);



module.exports = router;