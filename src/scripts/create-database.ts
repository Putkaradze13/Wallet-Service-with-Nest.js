import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

(async () => {
  console.log('Connecting to database');
  const connection = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  });

  try {
    await connection.query('SELECT table_name FROM information_schema.columns');
    try {
      await connection.query(`CREATE DATABASE ${process.env.DB_DATABASE}`);
      console.log('Database created');
    } catch (e) {
      console.log('Database has already been created');
    }
  } catch (e) {
    console.log('An error occurred');
    console.log(e);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
})();
