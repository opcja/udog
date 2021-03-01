var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');
const Article = require('../models/article');

let offerData = {};
let articleData = {};

/* GET home page. */
router.get('/', function (req, res, next) {
    // const newOffer = new Offer({
    //     title: 'test',
    //     descritpion: 'test',
    //     id: 1
    // })

    // newOffer.save((err) => {
    //      console.log(err);
    //  });
    // const newArticle = new Article({
    //     title: 'Psie potrzeby',
    //     description: 'Dzisiejszy wpis przybliży nam 10 potrzeb naszych czworonożnych przyjaciół. Dzisiejszy wpis przybliży nam 10 potrzeb naszych czworonożnych przyjaciół.',
    //     summary: 'Dzisiejszy wpis przybliży nam 10 potrzeb naszych czworonożnych przyjaciół. Dzisiejszy wpis przybliży nam 10 potrzeb naszych czworonożnych przyjaciół.',
    //     author: 'Ada',        
    //     id: 1
    // });

    // newArticle.save((err) => {
    //     console.log(err);
    // });
    const offers = Offer.find();
    offers.exec((err, data) => {        
        offerData = data;                      
    });
    
    const articles = Article.find();
    articles.exec((err, data) => {
        articleData = data;                      
    });

    res.render('index', { title: 'Uszy do góry', offerData, articleData });

});

module.exports = router;
