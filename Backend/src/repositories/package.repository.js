const Package = require('../models/package.model')

const createPackage = (packageData)=>{
    return Package.create(packageData)
}

const findPackageById = (packageId) => {
    return Package.findById(packageId)
}

module.exports ={createPackage , findPackageById}