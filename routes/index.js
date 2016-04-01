var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile/:user', function(req, res, next) {

  res.render('profile', {
    title: 'Robo Warzz',
    user: req.params.user
  })
});

router.get('/admin', function(req, res, next) {
  knex('fights').then(function(knexReturn){
    res.render('admin', {database: knexReturn})
  });
})
router.post('/admin', function(req, res, next){
  knex('fights').insert(req.body);
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
