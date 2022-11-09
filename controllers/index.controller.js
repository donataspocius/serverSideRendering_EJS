const HomePage = (req, res) => {
  res.render('index', { title: 'Home page' });
};

module.exports = HomePage;
