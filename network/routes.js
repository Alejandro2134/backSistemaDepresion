const userRouter = require('../routes/user/network');

const routesApi = app => {
    app.use('/user', userRouter);
}

module.exports = routesApi;