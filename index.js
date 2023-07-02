const express = require("express")
const app = express()

app.get('/get', async (req, res) => {
    return res.status(200).json({ "message": "working" });
})

const port = 5000

app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})