const mongoose = require('mongoose')
const shortid = require('shortid')

mongoose.connect('mongodb://localhost/urlshort')


let shortUrlSchema = new mongoose.Schema({
    full:{
        required: true,
        type: String
    },
    short:{
        type: String,
        required: true,
        default: () => shortid.generate()
    },
    clicks:{
        type: Number,
        required: true
    }
}) 

module.exports = mongoose.model('shortUrl' , shortUrlSchema)