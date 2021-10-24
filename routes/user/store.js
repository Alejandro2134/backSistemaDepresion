const User = require('./model');

const addUser = async newUser => {
    try {
        const user = await User.create({ 
            nombre: newUser.nombre,
            email: newUser.email,
            contraseña: newUser.contraseña,
            esAdmin: newUser.es_admin
        })

        return user;
    } catch (err) {
        throw new Error('Error interno');
    }
}

const logIn = async user => {
    try {
        const userData = await User.findOne({ where: { email: user.email } })
        return userData;
    } catch (err) {
        throw new Error('El usuario no esta registrado');
    }
}

module.exports = {
    add: addUser,
    logIn
}