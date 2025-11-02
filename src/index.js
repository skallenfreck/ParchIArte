const express = require('express');
const router = express.Router();

// Importar las rutas de cada recurso
const usuarioRoutes = require('./routes/usuarioRoute');
const reservaRoutes = require('./routes/reservaRoute');
const experienciaRoutes = require('./routes/experienciaRoute');
const aliadoRoutes = require('./routes/aliadoRoute');
const recomendacionRoutes = require('./routes/recomendacionRoute');

// Usar las rutas
router.use('/usuarios', usuarioRoutes); // /api/usuarios
router.use('/reservas', reservaRoutes); // /api/reservas
router.use('/experiencias', experienciaRoutes); // /api/experiencias
router.use('/aliados', aliadoRoutes); // /api/aliados
router.use('/recomendaciones', recomendacionRoutes); // /api/recomendaciones

module.exports = router;
