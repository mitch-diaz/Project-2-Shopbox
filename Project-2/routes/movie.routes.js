const router = require("express").Router();

const mongoose = require("mongoose");

// Require the User model in order to interact with the database
const Movie = require("../models/Movie.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get('/movies', (req, res, next) => {
    res.render('movies/movies');
});


router.get('/movies/createMovie', (req, res, next) => {
    res.render('movies/createMovie');
});


module.exports = router;

