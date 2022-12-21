const mongoose = require('mongoose')

const blog = new mongoose.Schema({
    blog_type:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true,
    },
    blog_description:{
        type:String,
        required:true,
    },
    create_by:{
        type:String,
        required:true,
    },
    c_date:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('blog_master',blog)