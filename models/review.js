const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;