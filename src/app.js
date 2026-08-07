const express = require('express');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

// Middleware para procesar JSON en el cuerpo de las peticiones
app.use(express.json());

// Registro de rutas de la API
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Ruta base de verificación
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al API de EcoHome Store' });
});

module.exports = app;