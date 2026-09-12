const packageService = require('../services/package.service')
const createPackage = async (req, res) => {
    const packageData = req.body

        if (!packageData.name || !packageData.price || !packageData.checklist) {
            return res.status(400).json({
                success: false,
                message: "Incomplete data",
                error: {
                    code: "VALIDATION_ERROR"
                }
            })
        }

        if (isNaN(packageData.price)) {
            return res.status(400).json({
                success: false,
                message: "Invalid price",
                error: {
                    code: "VALIDATION_ERROR"
                }
            })
        }

        if(packageData.price === 0){
            return res.status(400).json({
                success: false,
                message: "Price should be more than zero",
                error: {
                    code: "VALIDATION_ERROR"
                }
            })
        }

        if (!Array.isArray(packageData.checklist)) {
            return res.status(400).json({
                success: false,
                message: "Checklist should be array",
                error: {
                    code: "VALIDATION_ERROR"
                }
            })
        }

        const createdPackage = await packageService.createPackage(packageData)

        return res.status(201).json({
            success:true,
            message:"Package created successfully",
            data:createdPackage
        })
}

module.exports = { createPackage }