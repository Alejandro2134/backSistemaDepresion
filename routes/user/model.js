const { DataTypes } = require('sequelize')
const sequelize = require('../../db');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field: 'user_id'
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

const syncDatabase = async () => {
    try {
        await User.sync({ force: true });
        console.log('La tabla fue recreada correctamente');
    } catch (err) {
        console.log(err);
    }
    
}

syncDatabase();

module.exports = User;