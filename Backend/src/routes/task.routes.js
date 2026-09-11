const express  = require('express')
const {createTask} = require('../Controllers/task.controller')
const taskRouter = express.Router()

taskRouter.post('/task',createTask)

module.exports = taskRouter