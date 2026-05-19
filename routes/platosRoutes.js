const express = require('express');
const router = express.Router();

const {
    getPlatos,
    getPlatoById,
    createPlato,
    updatePlato,
    deletePlato
} = require('../controllers/platosController');

router.get('/', getPlatos);
router.get('/:id', getPlatoById);
router.post('/', createPlato);
router.put('/:id', updatePlato);
router.delete('/:id', deletePlato);

module.exports = router;