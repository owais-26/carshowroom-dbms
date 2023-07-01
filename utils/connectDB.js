// Import required dependencies
import React from "react";
import mysql from "mysql2";

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost", // MySQL server hostname
  user: "root", // Username for database access
  password: "owaismysql123", // Password for database access
  database: "messages_schema", // Name of the database to connect to
});

// Export the database connection as the default export
export default db;
