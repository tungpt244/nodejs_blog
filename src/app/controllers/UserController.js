const User = require('../models/User');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const md5 = require('md5');

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
                var hash = md5(req.body.password);

                if(!user) { 
                    res.render('user/login', {
                    err: ['User does not exits!']
                    })
                    return 
                }

                if(hash != user.password)  {
                    res.render('user/login', {
                        err: ['Wrong password!'],
                        values: req.body.email
                        })
                    return
                }

                res.cookie('userID', user._id, {signed : true})
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }

    create(req, res, next) {
        res.render('user/create')
    }

    postCreate(req, res, next) {
        const formData = req.body;
        formData.image = req.file.path.split('\\').slice(1).join('/');
        const user = new User(req.body);
        user.save()
        // .then(() => res.redirect('/'))
        // .catch(err=> {})
    }
}

module.exports = new UserController;

