const taskService = require('../services/task.service')
const demoTask = (req,res)=>{

 const taskData = req.body

 if(!taskData.title || !taskData.description || !taskData.city){
    return res.status(400).json({
        success:false,
        message:"Task data is incomplete",
        error:{
            code:"VALIDATION_ERROR"
        }
    })
 }

 const task = taskService.createTask(taskData)

 res.status(201).json({
    success:true,
    message:"Task received successfully",
    data:task
 })
}


module.exports = {demoTask}