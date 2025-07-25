const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.render('user/movies', { movies });
};
