const express = require("express")
const router = express.Router()
const task = require('./Task')

router.use('/task', task)

module.exports = router