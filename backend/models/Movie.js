const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    releaseDate: Date,
    genre: [String],
    country: String,
    actors: [String],
    synopsis: String,
    rating: { type: Number, default: 0 },
    approved: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Movie', MovieSchema);