exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('userID');
    table.string('name');
    table.string('password');
    table.integer('funds')
  })
   .createTable('fights', function (table) {
      table.increments('fightID');
      table.integer('winnerID');
      table.string('fightData');
      table.integer('fightWinner');
    })
  .createTable('wagers', function (table) {
      table.integer('userID')
      table.integer('fightID');
      table.integer('betOn');
      table.integer('wager');
    })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('users')
                   .dropTable('')
};
