const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "1234",
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;
