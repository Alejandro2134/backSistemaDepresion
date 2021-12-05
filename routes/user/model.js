const { DataTypes } = require('sequelize');
const config = require('../../config');
const sequelize = require('../../db');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    esAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_admin'
    }
})

if(config.nodeEnv == 'development') {
    const syncDatabase = async () => {
        try {
            await User.sync({ force: true });
            console.log('La tabla fue recreada correctamente');
        } catch (err) {
            console.log(err);
        }
        
    }
    
    syncDatabase();
}

if(config.nodeEnv == 'production') {
    const syncDatabase = async () => {
        try {
            await User.sync({ force: false });
            console.log('La tabla fue creada correctamente');
        } catch (err) {
            console.log(err);
        }
        
    }
    
    syncDatabase();
}

module.exports = User;