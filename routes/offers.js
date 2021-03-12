var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');

let offerData = {};

router.get('/', function (req, res, next) { 
  const offers = Offer.find();
  offers.exec((err, data) => {        
      offerData = data;                      
  });  

  console.log(res.locals.path);
  res.render('offers', { title: 'Uszy do góry - oferta', offerData, cssFile: 'stylesheets/offers.css'});
});

module.exports = router;