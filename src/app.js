import express from 'express';
const app = express();

//Routes
import poolsRoutes from './routes/pools.Routes.js';
import organizationsRoutes from './routes/organizations.Routes.js';


// Middlewares
app.use(express.json());

//Routes
app.use('/api/pools', poolsRoutes);
app.use('/api/organizations', organizationsRoutes);


// Configuración del puerto
app.set('PORT', process.env.PORT || 3000);

// Iniciar el servidor
app.listen(app.get('PORT'), () => {
  console.log(`Servidor escuchando en el puerto`, app.get('PORT'));
});