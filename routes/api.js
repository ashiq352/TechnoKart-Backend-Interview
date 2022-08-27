const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceSchema');

// get a list of Invoices from the database
router.get('/invoices',function(req,res,next){
    Invoice.find({}).then(function(invoice){
        res.send(invoice);
    }).catch(next);
});

// get a particular Invoice by number from the database
router.get('/invoices/:number',function(req,res,next){
    Invoice.find({}).then(function(invoice){
        res.send(invoice);
    }).catch(next);
});

// add a new Invoice to database
router.post('/invoices',function(req,res,next){
    Invoice.create(req.body).then(function(invoice){
        res.send(invoice);
    }).catch(next);
});

// update a Invoice in the database
// router.put('/invoices/:number',function(req,res,next){
//     Invoice.findOneAndUpdate({number: req.params.number},req.body).then(function(Invoice){
//         Invoice.findOne({number: req.params.number}).then(function(Invoice){
//             res.send(Invoice);
//         });
//     });
// });

// // delete a Invoice in the database
// router.delete('/invoices/:id',function(req,res,next){
//     Invoice.findOneAndDelete({_id: req.params.id}).then(function(Invoice){
//         res.send(Invoice);
//     });
// });

module.exports = router;