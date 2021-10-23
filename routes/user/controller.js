const store = require('./store');
const bcrypt = require('bcrypt');

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

module.exports = {
    addUser
}