import express, { Request, Response } from 'express';
import 'dotenv/config';

import logger from './shared/logger'
import { client } from './db/db'

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.listen(process.env.DB_PORT, () => {
  client.connect().then(() => {
    logger.info(`DB connecting!`);
  });
  logger.info(`Server started on port ${process.env.DB_PORT}!`);
});