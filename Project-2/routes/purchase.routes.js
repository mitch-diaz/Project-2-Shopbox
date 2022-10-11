const Purchase = require("../models/Purchase.model");
const Customer = require("../models/Customer.model");
const Book = require("../models/Book.model");
const Movie = require("../models/Movie.model");

const router = require("express").Router();

// =========== CREATE A NEW INVOICE ============

router.get('/purchases/create', (req, res, next) => {
    res.render('purchases/new-invoice')
})

router.post('/purchases/create', (req, res ,next) => {
    console.log(req.body);
    const invoiceToCreate = {
        invoiceTitle: req.body.invoiceTitle,
        invoiceId: req.body.invoiceId,
        invoiceDate: req.body.invoiceDate,
        invoiceStatus: req.body.invoiceStatus,
        paymentMethod: req.body.paymentMethod,
        customer: req.body.customer,
        items: req.body.items,
    }

    Purchase.create(invoiceToCreate)
    .then(newlyCreatedInvoice => {
        res.redirect('/purchases/invoice-history', {newlyCreatedInvoice});
    }).catch(err => {
        res.redirect('/purchases/create');
    })
})


// =========== READ LIST OF INVOICES ============

router.get('/invoice-history', (req, res, next) => {
    Purchase.find()
    .then((invoicesFromDb) => {
        console.log('Invoices from DB ===>' , {invoicesFromDb});
        invoiceData = {purchases: invoicesFromDb}
        res.render('purchases/invoice-history', invoiceData);
    })
    .catch(error => {
        console.log({error});
    })
})



module.exports = router;
