const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: Number,
        required: true
    },
    productThumbnail: {
        type: String,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model('Product', productSchema);