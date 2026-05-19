const db = require('../database/db');

const getEquipos = (req, res) => {
    const sql = `
    SELECT e.id, e.nombre, e.cargo, r.nombre AS restaurante
    FROM equipos e
    LEFT JOIN restaurantes r ON e.restaurante_id = r.id
  `;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    getEquipos
};