const express = require('express');
const router = express.Router();

const {
    getRestaurantes,
    getRestauranteById,
    getPlatosByRestaurante,
    getEquiposByRestaurante,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante
} = require('../controllers/restaurantesController');

router.get('/', getRestaurantes);
router.get('/:id', getRestauranteById);
router.get('/:id/platos', getPlatosByRestaurante);
router.get('/:id/equipos', getEquiposByRestaurante);
router.post('/', createRestaurante);
router.put('/:id', updateRestaurante);
router.delete('/:id', deleteRestaurante);

module.exports = router;