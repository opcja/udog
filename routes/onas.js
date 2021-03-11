var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {   
  res.render('onas', { title: 'Uszy do góry - O nas'});
});

module.exports = router;