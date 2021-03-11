var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');

let offerData = {};

router.get('/', function (req, res, next) { 
  const offers = Offer.find();
  offers.exec((err, data) => {        
      offerData = data;                      
  });  

  res.render('offers', { title: 'Uszy do góry - oferta', offerData});
});

module.exports = router;