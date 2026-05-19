const express = require('express');
const router = express.Router();

const { getEquipos } = require('../controllers/equiposController');

router.get('/', getEquipos);

module.exports = router;