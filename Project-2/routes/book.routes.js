const router = require("express").Router();

const mongoose = require("mongoose");

// Require the User model in order to interact with the database
const Book = require("../models/Book.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get('/books', (req, res, next) => {
    res.render('books/books');
});


router.get('/books/createBook', (req, res, next) => {
    res.render('books/createBook');
});


router.post('/books/createBook', (req, res, next) => {
    const bookToCreate = {
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        price: req.body.price,
        genre: req.body.genre,
        inventory: req.body.inventory
    }

    Book.create(bookToCreate)
    .then(newlyCreatedBook => {
        res.redirect('/books');
    })
    .catch(err => console.log(err))
});

module.exports = router;
