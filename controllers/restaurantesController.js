const db = require('../database/db');

const getRestaurantes = (req, res) => {
    const sql = `
    SELECT r.id, r.nombre, r.direccion, r.telefono, c.nombre AS categoria
    FROM restaurantes r
    LEFT JOIN categorias c ON r.categoria_id = c.id
  `;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getRestauranteById = (req, res) => {
    const { id } = req.params;

    const sql = `
    SELECT r.id, r.nombre, r.direccion, r.telefono, c.nombre AS categoria
    FROM restaurantes r
    LEFT JOIN categorias c ON r.categoria_id = c.id
    WHERE r.id = ?
  `;

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Restaurante no encontrado' });
        }

        res.json(results[0]);
    });
};

const getPlatosByRestaurante = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM platos WHERE restaurante_id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const getEquiposByRestaurante = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM equipos WHERE restaurante_id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    getRestaurantes,
    getRestauranteById,
    getPlatosByRestaurante,
    getEquiposByRestaurante
};