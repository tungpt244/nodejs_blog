const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User =  new Schema({
    host: {type: String},
    startTime: {type: Date, default: Date.now()},
    startTimeLocal: {type: String},
    pid: {type: String, default: 0}
})

module.exports = mongoose.model('User', User)