const knex = require('./knex');

module.exports = {
  getAllSpots: function() {
    return knex('spot');
  },
  getAllUsers: function() {
    return knex('user');
  },
  getUserById: function(id) {
    return knex('spot')
          .where('user_id', id).first();
  },
  getSpotById: function(id) {
    return knex('spot')
          .where('id', id).first();
  },
  create: function(spot) {
    return knex('spot')
          .insert(spot, 'id');
  },
  update: function(id, spot) {
    return knex('spot')
          .where('id', id)
          .update(spot, 'id');
  },
  delete: function(id) {
    return knex('spot')
          .where('id', id)
          .del();
  },
  createNewUser: function(user) {
    return knex('user')
          .insert(user, 'id')
          .then(ids => {
            return ids[0];
          });
  },
  getOneByEmail: function(email) {
    return knex('user')
          .where('email', email).first();
  }
};
