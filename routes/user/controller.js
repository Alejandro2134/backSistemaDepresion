const store = require('./store');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const addUser = newUser => {
    return new Promise((resolve, reject) => {
        const userPassword = newUser.contraseña;

        bcrypt.hash(userPassword, 10)
            .then(hash => {
                newUser.contraseña = hash;

                store.add(newUser)
                    .then(response => resolve(response))
                    .catch(err => reject(err.toString()))
            })
            .catch(err => reject(err))
    })
}

const logInUser = user => {
    return new Promise((resolve, reject) => {
        store.logIn(user)
            .then(userData => {
                bcrypt.compare(user.contraseña, userData.contraseña)
                    .then(result => {
                        if(result) {
                            const payload = { 
                                sub: userData.userId,
                                email: userData.email,
                                admin: userData.esAdmin,
                                nombre: userData.nombre  
                            }
                            const token = jwt.sign(payload, config.userJwtSecret, { expiresIn: '24h' })

                            const result = {
                                token,
                                userdata: {
                                    email: userData.email,
                                    admin: userData.esAdmin,
                                    nombre: userData.nombre  
                                }
                            }

                            resolve(result);
                        } else {
                            reject('Contraseña incorrecta');
                        }
                    })  
                    .catch(err => reject(err.toString()))
            })
            .catch(err => reject(err.toString()))
    })
}

const updateUser = (user, id, token) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.verify(token, config.userJwtSecret)
            
            if(payload.admin) {
                store.update(user, id)
                    .then(response => resolve(response))
                    .catch(err => reject(err.toString()))
            } else {
                reject('No tiene permisos para realizar esta acción')
            }
        } catch (err) {
            reject(err.toString())
        }
    })
}

const getUsers  = () => {
    return new Promise((resolve, reject) => {
        store.get()
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}

const deleteUser = (id, token) => {
    return new Promise((resolve, reject) => {
        const payload = jwt.verify(token, config.userJwtSecret)

        if(payload.admin) {
            store.delete(id)
                .then(response => resolve(response))
                .catch(err => reject(err.toString()))
        } else {
            reject('No tiene permisos para realizar esta acción')
        }
    })
}

const changePassword = (token, password) => {
    return new Promise ((resolve, reject) => {
        try {
            const { sub } = jwt.verify(token, config.userJwtSecret)

            store.getOne(sub)
                .then(userData => {
                    bcrypt.compare(password.nueva_contraseña, userData.contraseña)
                        .then(result => {
                            if(result) {
                                reject('Las contraseñas son iguales')
                            } else {
                                bcrypt.hash(password.nueva_contraseña, 10)
                                    .then(hash => {
                                        store.changePassword(sub, hash)
                                            .then(response => resolve(response))
                                            .catch(err => reject(err.toString()))
                                    })
                                    .catch(err => reject(err))
                            }
                        })
                }) 
                .catch(err => reject(err.toString()))
    
        } catch (err) {
            reject(err.toString())
        }
    })
}

module.exports = {
    addUser,
    logInUser,
    updateUser,
    getUsers,
    deleteUser,
    changePassword
}