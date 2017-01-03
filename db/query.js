const knex = require('./knex');

module.exports = {
    getAll: function() {
        return knex('spot');
    },
    getById: function(id) {
        return knex('spot')
            .where('user_id', id);
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
};
