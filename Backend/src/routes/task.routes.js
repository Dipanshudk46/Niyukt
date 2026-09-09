const express  = require('express')
const {demoTask} = require('../Controllers/task.controller')
const taskRouter = express.Router()

taskRouter.post('/task',demoTask)

module.exports = taskRouter