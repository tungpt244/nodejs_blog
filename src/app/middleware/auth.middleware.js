const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

module.exports.requiredAuth = function(req, res, next) {
    if(!req.signedCookies.userID) {
        res.redirect('/user/login')
        return
    }

    User.findOne({_id: req.signedCookies.userID})
    .then(user => {
        user = mongooseToObject(user);
        if(!user) {
            res.redirect('/user/login')
            return
        }
        res.locals.user = user
    })

    next()

}