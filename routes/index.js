'use strict';
var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});



router.get('/profile/:user', (req, res, next) => {
  var return1;
  var return2;
  knex('users').where({
    name: req.params.user})
  .then(function(knexReturn1) {
    console.log(knexReturn1[0].funds)
    return1 = knexReturn1;
    knex('fights').then(function(knexReturn2) {
      return2 = knexReturn2;
      res.render('profile', {
        title: 'Robo Warzasdadddz',
        user: return1[0].name,
        id: return1[0].userID,
        funds: return1[0].funds,
        database: return2
      })
    });
  });
});
const fightIDArr = [];
router.get('/admin', function(req, res, next) {
  knex('fights').then(function(knexReturn){
    // console.log(knexReturn);
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
router.get('/fights/:fightID', function(req, res, next) {
  var winner = Math.ceil(Math.random()*2);
  knex('fights')
  .where({fightID: req.params.fightID})
  .update({fightWinner: winner})
  .then(data => {
    res.redirect('/admin');
  });
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

router.get('/wagers/:fightID/:user', function(req, res, next){
  res.render('wagers')
})

module.exports = router;
