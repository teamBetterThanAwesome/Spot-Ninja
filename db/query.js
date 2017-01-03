const knex = require('./knex');

module.exports = {
    getAll: function() {
        return knex('spot');
    },
    getUserById: function(id) {
        return knex('spot')
            .where('user_id', id);
    },
    getSpotById: function(id) {
      return knex('spot')
            .where('id', id)
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
            .del()
    },
};
