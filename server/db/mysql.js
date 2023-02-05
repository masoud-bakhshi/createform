const mysql = require("mysql");

const db = mysql.createPool({
  user: process.env.MYSQLUSER,
  host: process.env.MYSQLHOST,
  password: process.env.MYSQLPASS,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

module.exports = db;
// const db = mysql.createPool({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Mb#$%5747bA",
//   database: "loginsystem",
//   port: 3307,
// });
// const db = mysql.createPool({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Masoud3234",
//   database: "loginsystem",
//   port: 3306,
// });
