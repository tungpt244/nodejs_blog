const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    index(req, res, next) {
        Course.findOne({slug: req.params.slug}) 
            .then(course => {
                res.json(course)
            })
            .catch(next);
    }
    
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}) 
            .then(course => {
                res.render('course/show', { course: mongooseToObject(course)});
            })
            .catch(next);
    }

    //[GET] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    //[POST] /course/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err=> {})
    }

     //[GET] /course/:id/edit
    edit(req, res, next) {
       Course.findById(req.params.id)
        .then(course => {
            res.render('course/edit', { course: mongooseToObject(course)});
            })
        .catch(next);
    }

    //[PUT] /course/:id
    update(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //DELETE] /course/:id
    destroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController;

