const createTask = (taskData) => {

    const task={
        ...taskData,
        status:"Draft"
    }
    return task
}

module.exports={createTask}