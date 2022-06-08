const express = require('express');
const BookController = require('../controllers/bookController.js')
const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createBook',BookController.createBook)
router.get('/getBookList',BookController.getBookList)
router.get('/getBooksInYear',BookController.getBooksInYear)
router.get('/getParticularBooks',BookController.getParticularBooks)
router.get('/getXINRBooks',BookController.getXINRBooks)
router.get('/getRandomBooks',BookController.getRandomBooks)


module.exports = router;
