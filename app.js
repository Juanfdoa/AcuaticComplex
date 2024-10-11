const express = require('express');
const app = express();
const poolRoutes = require('./routes/pool.routes');
const Pool = require('./infrastructure/models/pool.model');

// Middleware
app.use(express.json());

app.get('/pools', async (req, res) => {
    try {
      const pools = await Pool.findAll();
      res.json(pools);
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      res.status(500).json({ message: 'Error al obtener las piscinas', error: error.message }); // Añade el mensaje de error
    }
  });

// Rutas
app.use('/api/pools', poolRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
