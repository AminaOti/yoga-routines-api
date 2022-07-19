const express = require('express');
const router = express.Router();
const { getRoutine } = require('./controllers/yogaRoutines')

router.route('/routines/:id').get(getRoutine)

module.exports = router;
