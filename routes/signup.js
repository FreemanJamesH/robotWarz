var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) =>{
  knex('users')
    .insert({
      name: req.body.name,
      password: req.body.password,
      funds: 1000
    })
    .then(response => {})
    .catch(err =>{ next( new Error(err)) });

    res.redirect(`/profile/${req.body.name}`)
});

module.exports = router;
