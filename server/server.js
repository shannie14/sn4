//Node runs on a server not in a browser
//window object is browser
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config()

const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const User = require('./models/User');


// Express Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

const port = process.env.PORT || 7007;

// Connect to database
const connectionStringURI = process.env.NODE_ENV == 'production' ? process.env.MONGODB_URL : `mongodb://localhost:27017/Shannon`;
console.log(connectionStringURI)

let db;

mongoose.connect(connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('SK connected to mongodb successfully', connectionStringURI,)
    }).catch((err) => {
        console.log("Error in the Connection")
    })

//Endpoints

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Create an endpoint for login
app.post('/login', (req, res) => {
    // Grab username and password
    // Username and password is located in the body of the request
    const username = req.body.apple;
    const password = req.body.password;
    console.log('what is username password', username, password)
    // Check to see if these credentials are correct

    User.findOne({
        username,
        password
    })
        .then(user => {
            console.log('user returned from database', user)
            res.send(user)
        })


})

// Create our server and turn it on
app.listen(port);
console.log("hello spaceship");

