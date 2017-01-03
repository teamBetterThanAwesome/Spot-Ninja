exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "spot"; ALTER SEQUENCE spot_id_seq RESTART WITH 1')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('spot').insert({
                    lat: 39.757484,
                    lng: -105.006684,
                    rating: 4,
                    comment: "this parking space rocks!",
                    user_id: 1
                }),
                knex('spot').insert({
                    lat: 39.759646,
                    lng: -105.013291,
                    rating: 4,
                    comment: "this parking space sucks!",
                    user_id: 2
                }),
                knex('spot').insert({
                    lat: 39.757698,
                    lng: -105.006630,
                    rating: 4,
                    comment: "this parking space is ok!",
                    user_id: 2
                })
            ]);
        });
};
