const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const userRouter = require('./user');
const authMiddleware = require('../app/middleware/auth.middleware');


function route(app) {
    
    app.use('/news', authMiddleware.requiredAuth, newsRouter);
    app.use('/course', authMiddleware.requiredAuth, courseRouter);
    app.use('/me', authMiddleware.requiredAuth, meRouter)
    app.use('/user', userRouter);
    app.use('/', authMiddleware.requiredAuth, siteRouter);

}

module.exports = route;