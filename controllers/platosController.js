const db = require('../database/db');

// GET /api/platos
const getPlatos = (req, res) => {
    const sql = `
    SELECT p.id, p.nombre, p.descripcion, p.precio, r.nombre AS restaurante
    FROM platos p
    LEFT JOIN restaurantes r ON p.restaurante_id = r.id
  `;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// GET /api/platos/:id
const getPlatoById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM platos WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Plato no encontrado' });
        }

        res.json(results[0]);
    });
};

// POST /api/platos
const createPlato = (req, res) => {
    const { nombre, descripcion, precio, restaurante_id } = req.body;

    const sql = `
    INSERT INTO platos (nombre, descripcion, precio, restaurante_id)
    VALUES (?, ?, ?, ?)
  `;

    db.query(sql, [nombre, descripcion, precio, restaurante_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: 'Plato creado correctamente',
            id: result.insertId
        });
    });
};

// PUT /api/platos/:id
const updatePlato = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, restaurante_id } = req.body;

    const sql = `
    UPDATE platos
    SET nombre = ?, descripcion = ?, precio = ?, restaurante_id = ?
    WHERE id = ?
  `;

    db.query(sql, [nombre, descripcion, precio, restaurante_id, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Plato no encontrado' });
        }

        res.json({ message: 'Plato actualizado correctamente' });
    });
};

// DELETE /api/platos/:id
const deletePlato = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM platos WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Plato no encontrado' });
        }

        res.json({ message: 'Plato eliminado correctamente' });
    });
};

module.exports = {
    getPlatos,
    getPlatoById,
    createPlato,
    updatePlato,
    deletePlato
};