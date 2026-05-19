const express = require('express');
const cors = require('cors');
require('dotenv').config();

const restaurantesRoutes = require('./routes/restaurantesRoutes');
const platosRoutes = require('./routes/platosRoutes');
const equiposRoutes = require('./routes/equiposRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/restaurantes', restaurantesRoutes);
app.use('/api/platos', platosRoutes);
app.use('/api/equipos', equiposRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API La Ruta del Sabor funcionando correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


