const express = require ('express')
const {createPackage} = require('../Controllers/package.controller')
const packageRouter = express.Router()

packageRouter.post('/packages',createPackage)

module.exports = packageRouter