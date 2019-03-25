const mongoose = require('mongoose');


// Here, we just need to define a movie schema
const projectSchema = mongoose.Schema({
  stackFront: String,
  stackBack: String,
  name: String,
  desc: String, 
  pic_url: String,
  days_spent: Number
  });

// And then, we need to create a model which will create a new 'movies' collection in mlab base on the movie schema
const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;
