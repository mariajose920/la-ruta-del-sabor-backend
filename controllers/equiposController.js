const db = require('../database/db');

// GET /api/equipos
const getEquipos = (req, res) => {
    const sql = `
    SELECT e.id, e.nombre, e.cargo, r.nombre AS restaurante
    FROM equipos e
    LEFT JOIN restaurantes r ON e.restaurante_id = r.id
  `;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// GET /api/equipos/:id
const getEquipoById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM equipos WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Miembro del equipo no encontrado' });
        }

        res.json(results[0]);
    });
};

// POST /api/equipos
const createEquipo = (req, res) => {
    const { nombre, cargo, restaurante_id } = req.body;

    const sql = `
    INSERT INTO equipos (nombre, cargo, restaurante_id)
    VALUES (?, ?, ?)
  `;

    db.query(sql, [nombre, cargo, restaurante_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: 'Miembro del equipo creado correctamente',
            id: result.insertId
        });
    });
};

// PUT /api/equipos/:id
const updateEquipo = (req, res) => {
    const { id } = req.params;
    const { nombre, cargo, restaurante_id } = req.body;

    const sql = `
    UPDATE equipos
    SET nombre = ?, cargo = ?, restaurante_id = ?
    WHERE id = ?
  `;

    db.query(sql, [nombre, cargo, restaurante_id, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Miembro del equipo no encontrado' });
        }

        res.json({ message: 'Miembro del equipo actualizado correctamente' });
    });
};

// DELETE /api/equipos/:id
const deleteEquipo = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM equipos WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Miembro del equipo no encontrado' });
        }

        res.json({ message: 'Miembro del equipo eliminado correctamente' });
    });
};

module.exports = {
    getEquipos,
    getEquipoById,
    createEquipo,
    updateEquipo,
    deleteEquipo
};