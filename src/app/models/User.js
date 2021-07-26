const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User =  new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    image: {type: String},
}, {
    timestamps: true,
})

const Model = mongoose.model('User', User, 'user')

module.exports = Model