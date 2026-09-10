//Start server file
require('dotenv').config()
const app = require('./app')
const {connectDB} = require('./config/db.config')
const PORT = 4000

app.get('/',(req,res)=>{
    res.send("Server is running")
})

const startSever = async ()=>{
    try {
        await connectDB()

        app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
})
    } catch (error) {
        console.error("Database connection failed ",error)
    }

}

startSever()