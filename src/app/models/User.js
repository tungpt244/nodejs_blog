const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User =  new Schema({
}, {
    timestamps: true,
})

const Model = mongoose.model('User', User, 'user')

module.exports = Model