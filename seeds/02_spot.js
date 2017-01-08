exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "spot"; ALTER SEQUENCE spot_id_seq RESTART WITH 1')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('spot').insert({
                    lat: 39.759684,
                    lng: -105.014669,
                    rating: 4,
                    comment: "this parking space rocks!",
                    user_id: 1
                }),
                knex('spot').insert({
                    lat: 39.759693,
                    lng: -105.015044,
                    rating: 4,
                    comment: "this parking space sucks!",
                    user_id: 2
                }),
                knex('spot').insert({
                    lat: 39.759664,
                    lng: -105.013413,
                    rating: 4,
                    comment: "this parking space is ok!",
                    user_id: 2
                }),
                knex('spot').insert({
                    lat: 39.759635,
                    lng: -105.012780,
                    rating: 4,
                    comment: "this parking space is ok!",
                    user_id: 2
                }),
                knex('spot').insert({
                    lat: 39.759919,
                    lng: -105.013118,
                    rating: 5,
                    comment: "this parking space is great!",
                    user_id: 2
                }),  knex('spot').insert({
                      lat: 39.760357,
                      lng: -105.013118,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759741,
                      lng: -105.013110,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759240,
                      lng: -105.013125,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.758839,
                      lng: -105.013130,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.758535,
                      lng: -105.013134,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760797,
                      lng: -105.011271,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760792,
                      lng: -105.011977,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760797,
                      lng: -105.012630,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760797,
                      lng: -105.012957,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760290,
                      lng: -105.012454,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759290,
                      lng: -105.012519,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759003,
                      lng: -105.012506,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759622,
                      lng: -105.012035,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759611,
                      lng: -105.014086,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759611,
                      lng: -105.013839,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759701,
                      lng: -105.012938,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759619,
                      lng: -105.012595,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759693,
                      lng: -105.012208,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759710,
                      lng: -105.013067,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.759990,
                      lng: -105.013185,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  }),
                  knex('spot').insert({
                      lat: 39.760188,
                      lng: -105.013185,
                      rating: 4,
                      comment: "this parking space is ok!",
                      user_id: 2
                  })
            ]);
        });
};
