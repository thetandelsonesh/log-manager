const express = require('express');
const router = express.Router();

const createLog  = require('./createLog');
const getLogs  = require('./getLogs');
const getStats  = require('./getStats');

router.post('/', createLog);
router.get('/', getLogs);
router.get('/stats', getStats);

module.exports = router;