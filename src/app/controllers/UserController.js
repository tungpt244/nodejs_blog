const User = require('../models/User');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class UserController {

    // [GET] /search
    login(req, res, next) {
        res.render('user/login');
        res.clearCookie('userID');
    }

    loginpost(req, res, next) {
        User.findOne({email: req.body.email})
            .then(user => { 
                user = mongooseToObject(user);
                if(!user) { 
                    res.render('user/login', {
                    err: ['User does not exits!']
                    })
                    return 
                }
                if(user.password !== req.body.password)  {
                    res.render('user/login', {
                        err: ['Wrong password!']
                        })
                    return
                }
                res.cookie('userID', user._id)
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }
}

module.exports = new UserController;

