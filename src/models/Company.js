const mongoose = require('mongoose');
const PointSchema = require('./Utils/PointSchema');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyType: {
        type: String,
        required: true
    },
    companyDeliver: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    },
    companyLocation: {
        type: PointSchema,
        index: '2dsphere'
    },
    copanyAdress: {
        type: String,        
    },    
    companyWhatsApp: {
        type: String,
    },
    companySite: {
        type: String,
    },
    companyInstagram: {
        type: String,
    },
    companyFacebook: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Company', companySchema);