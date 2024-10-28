const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    movieTitle: String,
    genre: [String],
    country: String,
    actors: [String],
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    details: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

module.exports = mongoose.model('Request', RequestSchema);