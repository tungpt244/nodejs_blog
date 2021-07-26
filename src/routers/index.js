const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const userRouter = require('./user');
const authMiddleware = require('../app/middleware/auth.middleware');
const sessionMiddleware = require('../app/middleware/session.middleware');



function route(app) {
    
    app.use(sessionMiddleware);
    app.use('/news', authMiddleware.requiredAuth, newsRouter);
    app.use('/course', authMiddleware.requiredAuth, courseRouter);
    app.use('/me', authMiddleware.requiredAuth, meRouter)
    app.use('/user', userRouter);
    app.use('/', authMiddleware.requiredAuth, siteRouter);

}

module.exports = route;