const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, require: true },
  description: {type: String, maxLength: 600},
  image: {type: String},
  videoID: {type: String, maxLength: 250},
  level: {type: String, maxLength: 250},
  slug: {type: String, slug: 'name', uinque: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('courses', Course);