const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const md5 = require('md5');


class UserController {

    // [GET] /user/login
    login(req, res, next) {
        res.render('user/login');
        res.clearCookie('userID');
    }

    //[POST] user/login
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

    //[GET] user/create
    create(req, res, next) {
        res.render('user/create')
    }

    //[POST] /user/create
    postCreate(req, res, next) {
        const formData = req.body;
        formData.image = '/' + req.file.path.split('\\').slice(1).join('/');
        formData.password = md5(req.body.password)
        const user = new User(formData)
        user.save()
            .then(() => {res.redirect('/')})
            .catch(err => {})
    }
}

module.exports = new UserController;

