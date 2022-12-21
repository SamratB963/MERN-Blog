const express = require('express')
const router = express.Router()

const blogInfo = require('../models/blog_model') 

router.post('/addBlog',async (req,res)=>{
    const blogEntry = new blogInfo({
        blog_type: req.body.blog_type,
        blog: req.body.blog,
        blog_description:req.body.blog_description,
        create_by:req.body.create_by,

    })
    blogEntry.save()
})

router.get('/dispRecord',async(req,res)=>{
    const data = await blogInfo.find()
    res.send(data)
})

router.get('/getdistinct',async(req,res)=>{
    const result = await blogInfo.distinct('blog_type')
    res.send(result)
})

router.get('/dispRecord1/:type',async(req,res)=>{
    const data = await blogInfo.find({blog_type:req.params.type})
    res.send(data)
})

module.exports = router