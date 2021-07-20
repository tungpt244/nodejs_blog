const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestData =  new Schema({
}, {
    timestamps: true,
})

const Model = mongoose.model('testdata', TestData, 'testdata')

module.exports = Model