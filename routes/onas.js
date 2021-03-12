var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {  
  console.log(res.locals.path); 
  res.render('onas', { title: 'Uszy do góry - O nas', cssFile: 'stylesheets/onas.css'});
});

module.exports = router;