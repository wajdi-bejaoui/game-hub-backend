require('dotenv').config();
require('express-async-errors');
//import express module
const express = require("express");
//importation
const mongoose = require('mongoose');
const cors = require('cors');
const { log } = require("util");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const session = require ("express-session");




//import mongoose module
//const mongoose = require("mongoose");
//import body-parser module
//const bodyParser = require("body-parser");



//creation app BE  name app
const app = express();
app.use(express.json());


// Enable CORS for all routes
app.use(cors());
//connection bd
// mongoose.connect('mongodb://localhost:27017/LawExpert');

mongoose.connect('mongodb+srv://wajdibejaoui26:1234@cluster0.azs73u3.mongodb.net/GameHub?retryWrites=true&w=majority')



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connexion réussie à la base de données');
});


const gameRouter = require("./routes/gameRoutes")
const genreRouter = require("./routes/genreRoutes")
const platformRouter = require("./routes/platformRoutes")


app.use('/api/v1/games', gameRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/platforms', platformRouter);

const port = 3000;



// Your routes and other server configurations go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




//exportation app
module.exports = app;