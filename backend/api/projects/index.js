const express = require('express');
const router = express.Router();

const getProjects  = require('./getProjects');

router.get('/', getProjects);

module.exports = router;