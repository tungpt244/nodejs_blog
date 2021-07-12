const Course = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    
    //[GET] /news/
    index(req, res, next) {
        User.find({}) 
        .then(user => {
            res.render('home', {
                user: mutipleMongooseToObject(user)
            })
        })
        .catch(next);
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW D')
    }

}

module.exports = new NewsController;

