const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { error, succes } = require('../../network/response');

router.post('/', (req, res) => {
    const newUser = req.body;

    controller.addUser(newUser)
        .then(response => succes(req, res, response, 201))
        .catch(err => error(req, res, err, 500, ''))
})

router.post('/login', (req, res) => {
    const user = req.body;

    controller.logInUser(user)
        .then(response => succes(req, res, response, 200)) 
        .catch(err => error(req, res, err, 500, ''))
})

router.put('/:id/', (req, res) => {
    const user = req.body;
    const { id } = req.params;
    const token = req.headers.authorization.split(' ')[1]

    controller.updateUser(user, id, token)
        .then(response => succes(req, res, response, 200))
        .catch(err => error(req, res, err, 500, ''))
})

router.get('/', (req, res) => {
    controller.getUsers()
        .then(response => succes(req, res, response, 200))
        .catch(err => req, res, err, 500, '')
})

module.exports = router;