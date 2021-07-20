const Course = require('../models/Course');
const Test = require('../models/Test');

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
    search(req, res, next) {
        res.render('search')
    }

    //Phan trang Page
    testdata(req, res, next) {
        var page = parseInt(req.query.page) || 1; //n
        var nextPage = page + 1; 
        var prePage = page - 1;
        var perPage = 8; //x
        var start = (page -1) * perPage; 
        var end = page * perPage;

        Test.find({})
            .then(data => {
                res.render('test/test', {
                    data: mutipleMongooseToObject(data.slice(start, end)),
                    page: page,
                    next: nextPage, 
                    pre: prePage,
                    last: parseInt(data.length / perPage) + 1 
                })
            })
            .catch(next)
    }
}

module.exports = new SiteController;

