const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session =  new Schema({
    id: {type: String},
    cart: [{
        id_product: {type: String},
        value: {type: Number},
    }]
}, {
    timestamps: true,
})

const Model = mongoose.model('session', Session, 'session')

module.exports = Model