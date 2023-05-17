import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

import logger from 'shared/logger';
import { connection } from 'db'
import { userRouter } from 'routers/userRouters';

const app = express();

app.use(bodyParser.json())
app.use('/api/users', userRouter);

const start = async (): Promise<void> => {
  try {
    connection.authenticate().then(async() => {
      logger.info('database connected');
      try {
        await connection.sync({ force: true })
      } catch (e) {
        logger.error(e)
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

