const taskService = require('../services/task.service')
const createTask = (req,res)=>{

 const taskData = req.body

 if( !taskData.title ||
     !taskData.description ||
     !taskData.location ||
     !taskData.scheduledAt ||
     !taskData.packageId
    ){
    return res.status(400).json({
        success:false,
        message:"Task data is incomplete",
        error:{
            code:"VALIDATION_ERROR"
        }
    })
 }

 if( taskData.location.type !== "Point" || 
    !Array.isArray(taskData.location.coordinates)||
     taskData.location.coordinates.length !==2 ||
     isNaN(taskData.location.coordinates[0]) ||
     isNaN(taskData.location.coordinates[1]) ||
     taskData.location.coordinates[0] <-180 || 
     taskData.location.coordinates[0] >180 ||
     taskData.location.coordinates[1] <-90 ||
     taskData.location.coordinates[1] >90
    ){
        return res.status(400).json({
            success:false,
            message:"Location is not Valid",
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


module.exports = {createTask}