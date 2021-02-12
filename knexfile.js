// Update with your config settings.

module.exports = {
  client: "sqlite3", //specifying the DBMS
  useNullAsDefault: true, //an option that's required for SQLite
  connection:{
    filename:"./data/car-dealer.db3"   //location of our database file
  },
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
};
