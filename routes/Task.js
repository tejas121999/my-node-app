const express = require("express")
const router = express.Router()
const controller = require('../controller/Task')

router.post('/get', controller.get)
router.post('/post', controller.post)
router.post('/update', controller.update)

module.exports = router