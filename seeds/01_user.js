exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries\
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    name: 'Luke',
                    email: 'lukemccrae@gmail.com',
                    password: 'password'
                }),
                knex('user').insert({
                    name: 'Andy',
                    email: 'andy@computer.com',
                    password: 'differentpassword'
                })
            ]);
        });
};
