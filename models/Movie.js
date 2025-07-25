const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    timing: { type: String, required: true },
    price: { type: Number, required: true },
    poster: { type: String, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);
