const Movie = require('../model/movie.model.js');

const MoviesPage = async (req, res) => {
  const movies = await Movie.find();

  res.render('movies', { title: 'Movies page', movies });
};

module.exports = MoviesPage;
