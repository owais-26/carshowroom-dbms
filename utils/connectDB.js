//MYSQL
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "owaismysql123",
  database: "messages_schema",
});

export default db;
