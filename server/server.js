const express = require('express')
const cors = require("cors")
const bcrypt = require('bcrypt')
require('dotenv').config()
const Sequelize = require('sequelize')


const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const app = express()

//Middleware
app.use(express.json())
app.use(cors());
app.use(express.json())
app.use(express.static("client"))

//Routes

app.get('/', (req, res) => {
    res.sendFile("signup.html", {root: "client"})
})

//Sign Up  
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", {root: "client"})
    })      

///Homepage 
app.get('/home', (req, res) => {
    res.sendFile("home.html", {root: "client"})
})

//Iphones
app.get('/iphones', (req, res) => {
    res.sendFile("iphones.html", {root: "client"})
    })

//Macbooks
app.get('/macbooks', (req, res) => {
    res.sendFile("macbooks.html", {root: "client"})
    })

//Gadgets    
app.get('/gadgets', (req, res) => {
    res.sendFile("gadgets.html", {root: "client"})
    })

// Shop    
app.get('/shop', (req, res) => {
    res.sendFile("shop.html", {root: "client"})
    })      



    
//404error Route
// app.get('/404', (req, res) => {
//     res.sendFile("404.html", {root: "client"})
// })

//Will direct to 404 html page if url has /404
// app.use((req, res) => {
//     res.redirect('/404')
// })

//Create post request
app.post("/signup", (req, res) => {
        let {name, email, password, phoneNumber, agreement} = req.body
   
        let salt = bcrypt.genSaltSync(5)
        let hashPassword = bcrypt.hashSync(password, salt)

        sequelize.query(`
        INSERT INTO users (name, email, password)
        VALUES ('${name}', '${email}', '${hashPassword}');
        `)
        .then(dbRes => {
            res.send(dbRes)
        })

})

app.listen(5001, () => {
    console.log("Listening on port 5001 ")
})