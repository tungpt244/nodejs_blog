const User = require('../models/User');

module.exports.requiredAuth = function(req, res, next) {
    if(!req.cookies.userID) {
        res.redirect('/user/login')
        return
    }

    User.find({_id: req.cookies.userID})
    .then(user => {
        if(!user) {
            res.redirect('/user/login')
            return
        }
    })

    next()

}