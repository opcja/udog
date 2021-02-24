var express = require('express');
var router = express.Router();
const Offer = require('../models/offer');



/* GET home page. */
router.get('/', function (req, res, next) {
    // const newOffer = new Offer({
    //     title: 'Zajęcia indywidualne',
    //     description: 'Piesek sobie trenuje sam, żeby go niczym nie rozpraszać i skupić całą uwagę trenera na jego problemach. Piesek sobie trenuje sam, żeby go niczym nie rozpraszać i skupić całą uwagę trenera na jego problemach.',
    //     imageURL: 'images/indywidualne.png',
    //     id: 1
    // });

    // newOffer.save((err) => {
    //     console.log(err);
    // });
    const offers = Offer.find();

    offers.exec((err, data) => {
        res.render('index', { title: 'Uszy do góry', data });        
    }); 

});

module.exports = router;
