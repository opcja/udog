var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {     
  res.render('kontakt', { title: 'Uszy do góry - Kontakt', cssFile: 'stylesheets/kontakt.css' });
});

module.exports = router;