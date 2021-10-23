const User = require('./model');

const addUser = async newUser => {
        
    try {
        const user = await User.create({ 
            nombre: newUser.nombre,
            email: newUser.email,
            contraseña: newUser.contraseña,
            esAdmin: newUser.es_admin
        })

        await user.save();
        return user;
    } catch (err) {
        throw new Error('Error interno');
    }
}

module.exports = {
    add: addUser
}