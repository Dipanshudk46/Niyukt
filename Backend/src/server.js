//Start server file
const app = require('./app')

const PORT = 4000

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})