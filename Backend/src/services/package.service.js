const packageRepository = require('../repositories/package.repository')

const createPackage = (packageData) =>{
 return packageRepository.createPackage(packageData)
}

module.exports = {createPackage}