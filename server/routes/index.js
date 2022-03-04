/*
Student's Name: SOhyeon Song
StudentID: 301145311
*/



let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for the displaying Login Page */
router.get('/login', indexController.displayLoginPage);

/* GET Route for the processing Login Page */ 
router.post('/login', indexController.processLoginPage);  

/* GET Route for the displaying Register Page */
router.get('/register', indexController.displayRegisterPage);

/* GET Route for the processing Register Page */ 
router.post('/register', indexController.processRegisterPage);  

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
