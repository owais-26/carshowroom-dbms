// Import required dependencies
import React from "react";
import mysql from "mysql2";

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"owaismysql123",
  
  database: "messages_schema"
});

// Export the database connection as the default export
export default db;
