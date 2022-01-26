const express = require('express')
require('dotenv').config()
const path = require('path')
const port = process.env.PORT

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'))
})

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.listen(port, () => {
    console.log("Listening on port " + port)
})