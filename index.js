var bodyParser = require("body-parser")
const routes = require('./routes/api')
const express = require("express")
const app = express()
const cors = require("cors")
const { sequelize } = require("./models")

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//     console.log("table is sync")
// })

// parse application/json
app.use(bodyParser.json())
app.use('/api', routes)
app.get('/get', async (req, res) => {
    return res.status(200).json({ "message": "working fine" });
})
// app.use(File)

module.exports = app
