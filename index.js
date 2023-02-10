// Importaciones Principales
require('dotenv').config();

// Importacion de archivos
const Server = require('./models/server');

// Instancia del servidor de arranque
const servidorIniciado = new Server();

//Llamar al metodo listen que levanta el servidor
servidorIniciado.listen();