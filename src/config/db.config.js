'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql8.freesqldatabase.com',
  user     : 'sql8596148',
  password : 'eSpMTAj1G1',
  database : 'sql8596148',
  port     : '3306'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;