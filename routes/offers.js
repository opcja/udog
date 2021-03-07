var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');

router.get('/', function (req, res, next) {  
  res.render('offers', { title: 'Oferta'});
});

module.exports = router;