//Defines which HTTP request goes to
const express = require('express')
const {healthCheck} = require('../Controllers/health.controller')
const router = express.Router()

router.get('/health',healthCheck)

module.exports = router