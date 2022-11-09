const mongoose = require('mongoose');

const movieShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('movie', movieShema);
module.exports = Movie;
