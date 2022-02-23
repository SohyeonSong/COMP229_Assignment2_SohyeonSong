/*
Student's Name: Sohyeon Song
StudentID: 301145311
*/

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.user);

router.get('/', userController.sohyeon);

module.exports = router;
