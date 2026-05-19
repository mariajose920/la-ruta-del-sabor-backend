const db = require('../database/db');

const getPlatos = (req, res) => {
    const sql = `
    SELECT p.id, p.nombre, p.descripcion, p.precio, r.nombre AS restaurante
    FROM platos p
    LEFT JOIN restaurantes r ON p.restaurante_id = r.id
  `;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    getPlatos
};