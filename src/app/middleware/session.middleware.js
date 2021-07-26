const shortid = require('shortid');
const Session = require('../models/Session');

module.exports = function(req, res, next) {
    if(!req.signedCookies.sessionID) {
        var sessionID = shortid.generate();
        res.cookie('sessionID', sessionID, {
            signed: true,
        })

    var session = new Session({id: sessionID});
    session.save()
    } 
    next()
}