const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.dbUrl, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
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