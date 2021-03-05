var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');
const Article = require('../models/article');
const nodemailer = require("nodemailer");

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

router.post('/', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'uszydogory.biuro@gmail.com',
            pass: 'psiaki123'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'uszydogory.biuro@gmail.com',
        subject: 'Wiadomość z udog.pl',
        html: `<h1>Wiadomość ze strony internetowej</h1>
        <p>${req.body.message}</p>
        <p>Numer telefonu nadawcy (opcjonalnie): ${req.body.phoneNumber}</p>`
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if(!error) {
            res.json({
                send: true
            });
        } else {
            console.log(error);            
        }   
    }); 
})

module.exports = router;
