const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    
    //[GET] 
    home(req, res, next) {
       
        Course.find({}) 
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    searchp(req, res) {
        res.send(req.body);
    }

}

module.exports = new SiteController;

