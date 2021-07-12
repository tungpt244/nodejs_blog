const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/nodeJS_blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('ok');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect } ;

