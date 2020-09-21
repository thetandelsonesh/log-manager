const express = require('express');
const router = express.Router();

const getEmployees  = require('./getEmployees');

router.get('/', getEmployees);

module.exports = router;