const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    // [GET] /search
    index(req, res, next) {
        Course.find({})
            .then(course => res.render('me/stored-courses', {
                course: mutipleMongooseToObject(course)
            }))
            .catch(next)
    }
}

module.exports = new MeController;

