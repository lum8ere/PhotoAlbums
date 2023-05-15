import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

export const connection = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  models: [__dirname + '/models'] 
})