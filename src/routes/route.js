const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash');
const { json } = require('body-parser');
const router = express.Router();



router.get('/hello', function (req, res) {
  var y = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  var x = underscore.chunk(underscore.shuffle(y), 3);
  console.log(x)
  res.send('my first ever api')

});


router.get('/movies', function (req, res) {

  let x = ['rande de basanti', 'the shining', 'lord of the ring', 'bartman beging']
  res.send(x)


});


router.get('/movies/:indexNumer', function (req, res) {

  let x = ['rande de basanti', 'the shining', 'lord of the ring', 'bartman beging']
  console.log('movie index ' + JSON.stringify(req.params))
  if(req.params.indexNumer>3){
   // console.log('use a valid index')
    res.send('use a valid indexNumber')
  }else{
    
    console.log('movie index ' + req.params.indexNumer + ':'+ 'movie Name'+ x[req.params.indexNumer])
    res.send('Done')
  }
  
 });


router.get('/films', function (req, res) {

  let movies = [{
    "id":1,
    "name":"The shing"
  },{
    "id":2,
    "name":"Incendies"
  },{
    "id":3,
    "name":"Rang de Bansanti"
  },{
    "id":4,
    "name":"FInding Nemo"
  }]
res.send(movies)
});



router.get('/films/:filmId', function (req, res) {
  let movies = [{
    "id":1,
    "name":"The shing"
  },{
    "id":2,
    "name":"Incendies"
  },{
    "id":3,
    "name":"Rang de Bansanti"
  },{
    "id":4,
    "name":"FInding Nemo"
  }]

  console.log('movie Id ' + JSON.stringify(req.params))
  if(req.params.filmId>4 ||req.params.filmId <=0 ){
   console.log('No movie exists with this Id')
    res.send('No movie exists with this Id')
    
  }else{
    let film_id=Number(req.params.filmId)
    let movie = movies.find(movie => movie.id === film_id)
    console.log(movie)
    res.send(movie)
  }
  
 });



module.exports = router;
// adding this comment for no reason

