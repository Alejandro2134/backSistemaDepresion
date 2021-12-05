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
        const userData = await User.findOne({ 
            where: { 
                email: user.email 
            } 
        })

        return userData;
    } catch (err) {
        throw new Error('El usuario no esta registrado');
    }
}

const updateUser = async(user, id) => {
    try {
        await User.update(
        {
            nombre: user.nombre,
            email: user.email,
            esAdmin: user.es_admin
        }, 
        {
            where: {
                id
            }
        })

        return "Usuario actualizado correctamente";
    } catch (err) {
        throw new Error('El usuario no existe');
    }
}

const getUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (err) {
        throw new Error('Error interno');
    }
}

const deleteUser = async (id) => {
    try {
        await User.destroy({
            where: {
                id
            }
        })

        return 'Usuario eliminado'
    } catch (err) {
        throw new Error('El usuario no existe');
    }
}

const getUserById = async id => {
    try {
        const user = await User.findOne({
            where: {
                id
            }
        })

        return user;
    } catch (err) {
        throw new Error('El usuario no existe');
    }
} 

const changePassword =  async (id, newPassword) => {
    try {
        await User.update(
            {
                contraseña: newPassword
            },
            {
                where: {
                    id
                }
            }
        )

        return 'Contraseña actualizada'
    } catch (err) {
        throw new Error('El usuario no existe');
    }
}

module.exports = {
    add: addUser,
    logIn,
    update: updateUser,
    get: getUsers,
    delete: deleteUser,
    changePassword,
    getOne: getUserById
}