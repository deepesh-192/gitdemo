const express = require('express');
const underscore=require('underscore')
// const lodash=require('lodash')
const router = express.Router();

    

router.get('/hello', function (req, res) {
    var y=["january","february","march", "april","may","june","july","august","september","october","november","december"]
    var x =underscore.chunk(underscore.shuffle(y),3);
    console.log(x)
    res.send('my first ever api')
    
});





module.exports = router;
// adding this comment for no reason