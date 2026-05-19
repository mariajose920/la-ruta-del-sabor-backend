const express = require('express');
const router = express.Router();

const { getPlatos } = require('../controllers/platosController');

router.get('/', getPlatos);

module.exports = router;