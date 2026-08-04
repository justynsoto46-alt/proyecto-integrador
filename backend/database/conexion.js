// Carga las variables del archivo .env
require("dotenv").config();

// Importa MongoClient desde la librería de MongoDB
const { MongoClient } = require("mongodb");

// Obtiene la cadena de conexión y el nombre de la base de datos
const uri = process.env.MONGO_URI;
const nombreBaseDatos = process.env.DB_NAME;

// Crea el cliente que permitirá conectarse a MongoDB Atlas
const clienteMongo = new MongoClient(uri);

// Función para conectarse a MongoDB Atlas
async function conectarBaseDatos(){

    await clienteMongo.connect();

    const baseDatos = clienteMongo.db(nombreBaseDatos);

    console.log("Conexión exitosa con MongoDB Atlas");

    return baseDatos;
}

module.exports = {
    conectarBaseDatos
};