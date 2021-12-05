const express = require('express');
const cors = require('cors');
require('./db');
const routesApp = require('./network/routes');

//Inicialización de la app
const app = express();

app.use(cors());
app.use(express.json());

//Rutas de la app
routesApp(app);

let port = process.env.PORT;
if(port == null || port == '') {
    port = 8000;
}

app.listen(port, () => {
    console.log('Corriendo en el puerto:' , port);
})