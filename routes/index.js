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
