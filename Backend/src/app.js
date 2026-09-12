    //Config the express Application file
    const express = require('express')
    
    const router = require('./routes/health.routes')
    
    const taskRouter = require('./routes/task.routes')
    const packageRouter = require('./routes/package.routes')
    const app = express()


    app.use(express.json()) 
    app.use('/api/v1',router)
    app.use('/api/v1',taskRouter)
    app.use('/api/v1',packageRouter)
    module.exports = app