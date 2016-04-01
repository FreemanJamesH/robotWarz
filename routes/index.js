'use strict';
var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/profile/:user', (req, res, next) => {
  var return1;
  var return2;
  knex('fights').then(function(knexReturn){
    console.log(knexReturn);
  });
  res.render('profile', {title: 'Robo Warzasdadddz', user: req.params.user, database:knexReturn})
});
const fightIDArr = [];
router.get('/admin', function(req, res, next) {
  knex('fights').then(function(knexReturn){
    console.log(knexReturn);
    res.render('admin', {database: knexReturn})
  });
})
router.post('/admin', function(req, res, next){

  knex('fights').insert({
      fighterOne: req.body.fighterOne,
      fighterTwo: req.body.fighterTwo
  }).then(function(){
    res.redirect('/admin');
  })
})
router.post('/fight', function(req, res, next) {
  console.log();
  var winner = Math.ceil(Math.random()*2);
  knex('fights').where('id', )insert('fightWinner', winner);
})

//nested knex selector example
// router.post('/test/:fightID', function(req,res,next){
//   knex('fights')
//   .where({fightID: req.params.fightID})
//   .first()
//   .then(function(response){
//     knex('wagers')
//     .insert({fightID: response.fightID})
//     .then(function(){
//       res.redirect('/');
//     })
//   })
// })

module.exports = router;
