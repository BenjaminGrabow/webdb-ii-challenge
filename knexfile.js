module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/car-dealer.db3'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};
