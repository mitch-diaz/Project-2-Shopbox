const Purchase = require("../models/Purchase.model");
const Customer = require("../models/Customer.model");
const Book = require("../models/Book.model");
const Movie = require("../models/Movie.model");
const { populate } = require("../models/Purchase.model");

const router = require("express").Router();

// =========== CREATE A NEW INVOICE ============

router.get('/purchases/create', (req, res, next) => {
    res.render('purchases/new-invoice')
})

router.post('/purchases/create', (req, res ,next) => {
    console.log(req.body);
    const invoiceToCreate = {
        invoiceId: req.body.invoiceId,
        invoiceDate: req.body.invoiceDate,
        paymentMethod: req.body.paymentMethod,
        customers: req.body.customers,
        books: req.body.books,
        movies: req.body.movies,
        purchaseTotal: req.body.purchaseTotal,
    }

    Purchase.create(invoiceToCreate)
    .then(newlyCreatedInvoice => {
        res.redirect('/purchases/create', {newlyCreatedInvoice});
    }).catch(err => {
        res.redirect('/purchases/create');
    })
})


// =========== READ LIST OF INVOICES ============

router.get('/purchases', (req, res, next) => {
    Purchase.find()
    .then((invoicesFromDb) => {
        console.log('Invoices from DB ===>' , {invoicesFromDb});
        invoiceData = {purchases: invoicesFromDb}
        res.render('purchases/purchases', invoiceData);
    })
    .catch(error => {
        console.log({error});
    })
})

// ============ READ SPECIFIC PURCHASE DETAILS ============

router.get('/purchases/:purchaseId', (req, res, next) => {
    console.log('params ===> ', {params: req.params.purchaseId});

    Purchase.findById(req.params.purchaseId)
    .populate('books')
    .populate('movies')
    .populate('customers')
    .then(purchasesFromDb => {
        console.log('The clicked on purchase: ', purchasesFromDb);
        res.render('purchases/purchase-details', purchasesFromDb);
    })
    .catch(error => {
        console.log({error});
    })
})


// =========== DELETE PURCHASE ============

router.post('/purchases/delete/:purchaseId', (req, res, next) => {
  
    Purchase.findByIdAndDelete(req.params.purchaseId)
    .then(() => {res.redirect('/purchases')})
    .catch(err => console.log(err));
});



module.exports = router;
