const express = require('express');
const router = express.Router();
const { getRoutine, getAllRoutines } = require('./controllers/yogaRoutines')

router.route('/routines/:id').get(getRoutine);
router.route('/routines').get(getAllRoutines)

module.exports = router;
