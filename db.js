const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: config.dbUsername,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort,
    host: config.dbHost
})

const testDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la bd');
    } catch (err) {
        console.log('Error al conectarse a la bd: ', err);
    }
}

testDb();

module.exports = sequelize;