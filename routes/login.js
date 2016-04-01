var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', (req, res, next) =>{
  knex('users')
    .where({
      name: req.body.name.toLowerCase(),
    })
    .then(data => {
      // res.json(response)
      console.log(data[0].password);
      if (req.body.password === data[0].password){
        console.log('Success!');
        res.redirect(`/profile/${req.body.name}`)
      } else {
        console.log('No!');
      }

    })
    .catch(err =>{ next( new Error(err)) });


});

module.exports = router
