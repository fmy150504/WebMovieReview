const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: String,
    rating: { type: Number, min: 1, max: 5 },
    review: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', ReviewSchema);