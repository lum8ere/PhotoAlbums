import express, { Request, Response } from 'express';
import 'dotenv/config';

import logger from 'shared/logger';
import { connection } from 'db'

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

const start = async (): Promise<void> => {
  try {
    // await connection.sync()
    connection.authenticate().then(async() => {
      logger.info('database connected');
      try {
        await connection.sync({ force: true })
      } catch (e) {
        // logger.error(error)
        console.log('[DB]', e)
      }
    })

    app.listen(process.env.DB_PORT, () => {
      logger.info(`Server started on port ${process.env.DB_PORT}!`);
    });
  } catch (e) {
    // logger.error(error);
    console.log(e)
    process.exit(1);
  }
}

void start();

