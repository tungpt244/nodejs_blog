const Test = require('../../app/models/Test');

module.exports = function(req, res, next) {
    Test.find({})
        .then(data => {
            res.json(data)
        })
        .catch(next)
}