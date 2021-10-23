const express = require('express');
require('./db');
const routesApp = require('./network/routes');

//Inicialización de la app
const app = express();

app.use(express.json());

//Rutas de la app
routesApp(app);

app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000');
})