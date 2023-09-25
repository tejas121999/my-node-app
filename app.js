var bodyParser = require("body-parser")
const routes = require('./routes/api')
const express = require("express")
const app = express()
const cors = require("cors")
const { sequelize } = require("./models");

require("dotenv").config()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//     console.log("table is sync")
// })

app.use('/api', routes)


module.exports = app