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
    createNewUser: function(user) {
        return knex('user')
            .insert(user, 'id');
    }
};
