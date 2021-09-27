const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: String,
    count: Number
})

exports.Post = mongoose.model('Post', postSchema)