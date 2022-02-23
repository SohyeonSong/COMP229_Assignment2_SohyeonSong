/*
Student's Name: SOhyeon Song
StudentID: 301145311
*/


var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET about page. */
router.get('/about', indexController.about );

/* GET Projects page. */
router.get('/projects', indexController.projects );

/* GET Services page. */
router.get('/services', indexController.services);

/* GET Contact page. */
router.get('/contact', indexController.contact);

module.exports = router;
