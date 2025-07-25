const Movie = require('../models/Movie');

exports.getDashboard = async (req, res) => {
    const movies = await Movie.find();
    res.render('admin/dashboard', { movies });
};

exports.getAddMovie = (req, res) => {
    res.render('admin/addMovie');
};

exports.postAddMovie = async (req, res) => {
    const { name, timing, price } = req.body;
    const poster = req.file.filename;
    await Movie.create({ name, timing, price, poster });
    res.redirect('/admin');
};

exports.getEditMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('admin/editMovie', { movie });
};

exports.postEditMovie = async (req, res) => {
    const { name, timing, price } = req.body;
    let updateData = { name, timing, price };

    if (req.file) {
        updateData.poster = req.file.filename;
    }

    await Movie.findByIdAndUpdate(req.params.id, updateData);
    res.redirect('/admin');
};

exports.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
};

exports.viewMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('admin/viewMovie', { movie });
};
