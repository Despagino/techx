const express = require('express')
const path = require('path')
const cors = require("cors");

const app = express()

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use("/styles", express.static(path.join(__dirname, "../client/reset.css")));

app.use("/js", express.static(path.join(__dirname, "../client/index.js")));


const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log("Listening on port " + port)
})