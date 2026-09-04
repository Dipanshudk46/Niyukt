const healthCheck = (req,res)=>{
res.json({
        success:true,
        message:'Niyukt API is healthy ',
        data:{
            status:"ok"
        }
    })
}

module.exports = {healthCheck}