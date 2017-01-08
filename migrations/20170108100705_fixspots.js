
exports.up = function(knex, Promise) {
  return knex.schema.table('spot', table => {
    table.dropColumn('2_hr');
    table.boolean('two_hour').default(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('spot', table => {
    table.dropColumn('two_hour');
    table.boolean('2_hr').default(false);
  });
};
