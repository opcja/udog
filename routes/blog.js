var express = require('express');
var router = express.Router();
const Article = require('../models/article');

let articleData = {};

router.get('/', function (req, res, next) {    
  const articles = Article.find();
  articles.exec((err, data) => {        
      articleData = data;                         
  }); 

  console.log(res.locals.path);
  res.render('blog', { title: 'Uszy do góry - Blog', articleData, cssFile: 'stylesheets/blog.css' });

}); 

module.exports = router;