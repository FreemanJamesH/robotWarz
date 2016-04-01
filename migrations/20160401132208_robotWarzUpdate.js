
exports.up = function(knex, Promise) {
  return knex.schema.table('fights', function(table){
    table.string('fighterOne');
    table.string('fighterTwo');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('fights', function(table){
    table.dropColumn('fighterOne');
    table.dropColumn('fighterTwo');
  });
};
