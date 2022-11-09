const mongoose = require('mongoose');
const Movie = require('./model/movie.model.js');
require('dotenv').config();

// Connection to DB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB from mockedData.js');

  (async () => {
    await Movie.deleteMany();

    const res = await Movie.insertMany([
      { name: 'Batman', category: 'Action' },
      { name: 'Spiderman', category: 'Action' },
      { name: 'Harry Potter', category: 'Action' },
    ]);

    if (res.length) {
      console.log('--- Movies added! ---');
      process.exit(1);
    }
  })();
});
