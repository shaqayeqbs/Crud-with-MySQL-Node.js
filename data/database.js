const mysql = require("mysql2/promise");

//pool is more efficient
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blog",
  password: "123456",
});

module.exports = pool;
