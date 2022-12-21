const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routesUrl = require('./routes/blog_routes')
const app = express()
mongoose.connect('mongodb://localhost:27017/blogs')

app.use(express.json())
app.use(cors())

app.use('/api',routesUrl)

app.listen(5000,()=>{
    console.log("Server is started on port 5000")
})