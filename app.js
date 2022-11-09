const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connection to DB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');

  app.listen(PORT, () => console.log('Server running on port:' + PORT));
});

const Movie = require('./model/movie.model.js');

const { HomePage, AboutPage, MoviesPage } = require('./controllers');

// Routes
app.get('/', HomePage);

app.get('/about', AboutPage);

app.get('/movies', MoviesPage);
