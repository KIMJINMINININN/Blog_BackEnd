import mysql from "mysql";

export const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abcd1234",
  database: "Blog_Database",
});
