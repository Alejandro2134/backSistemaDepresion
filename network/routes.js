const userRouter = require('../routes/user/network');

const routesApi = app => {
    app.use('/users', userRouter);
}

module.exports = routesApi;