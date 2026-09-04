    //Config the express Application file
    const express = require('express')


    const router = require('./routes/health.routes')
    const app = express()


    app.use(express.json()) 
    app.use('/api/v1',router)
    module.exports = app