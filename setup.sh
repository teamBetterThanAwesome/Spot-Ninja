cp .env.sample .env
createdb spotninja
npm install
knex migrate:latest
knex seed:run
