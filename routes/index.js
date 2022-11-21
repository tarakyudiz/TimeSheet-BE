const express = require('express')
const router = express.Router()
const task = require('./task')
router.use('/api/v1',[task])
module.exports = router