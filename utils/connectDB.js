// Import required dependencies
import React from "react";
import mysql from "mysql2";

// Create a MySQL database connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
});

// Export the database connection as the default export
export default db;
