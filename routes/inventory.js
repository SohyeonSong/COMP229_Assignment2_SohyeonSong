let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let inventory = require('../models/inventory');

router.get('/list', function(req, res, next) {
    inventory.find((err, inventoryList) => {
        console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else{
            console.log(inventoryList);
        }
    });

    res.render('about', { title: 'About' });
  });

  module.exports = router;