
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spot', table => {
    table.increments();
    table.float('lat').notNullable();
    table.float('lng').notNullable();
    table.integer('rating');
    table.text('comment');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.boolean('2_hr').default(false);
    table.boolean('all_day').default(false);
    table.boolean('night').default(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spot');
};
