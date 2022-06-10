const express = require('express');
const bookController = require('../controllers/bookController.js');
const authorController = require('../controllers/authorController.js');
const publisherController = require('../controllers/publisherController.js');
const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



router.post('/createAuthor',authorController.createAuthor)
router.post('/createPublisher',publisherController.createPublisher)
router.post('/createBook',bookController.createBook)



router.get('/getAuthorData',authorController.getAuthorData)
router.get('/getPublisherData',publisherController.getPublisherData)
router.get('/getBooksData',bookController.getBooksData)



router.get('/getBooksWithAuthorAndPublisherDetails',bookController.getBooksWithAuthorAndPublisherDetails)

module.exports = router;
