import mysql from 'mysql';

export const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '111111',
  database: 'blog',
});
