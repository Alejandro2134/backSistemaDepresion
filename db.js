const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'username',
    password: 'password',
    database: 'sistema-cancer',
    port: 5432,
    host: 'localhost'
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
