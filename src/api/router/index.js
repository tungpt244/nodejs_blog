const apitestRouter = require('./test');

function apiroute(app) {
    
    app.use('/api', apitestRouter);

}

module.exports = apiroute;