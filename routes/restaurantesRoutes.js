const express = require('express');
const router = express.Router();

const {
    getRestaurantes,
    getRestauranteById,
    getPlatosByRestaurante,
    getEquiposByRestaurante
} = require('../controllers/restaurantesController');

router.get('/', getRestaurantes);
router.get('/:id', getRestauranteById);
router.get('/:id/platos', getPlatosByRestaurante);
router.get('/:id/equipos', getEquiposByRestaurante);

module.exports = router;