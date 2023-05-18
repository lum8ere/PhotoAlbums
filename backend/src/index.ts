import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';

import logger from 'shared/logger';
import { connection } from 'db'
import { userRouter } from 'routers/userRouters';
import RoleModel from 'models/role.model';

const app = express();

app.use(bodyParser.json())
// app.use('/api/users', userRouter);
require('./routers/auth.routes') (app);
require('./routers/user.routes') (app);

const initial = () => {
  RoleModel.create({
    role_id: 1,
    name: "user"
  });
  RoleModel.create({
    role_id: 2,
    name: "moderator"
  });
  RoleModel.create({
    role_id: 3,
    name: "admin"
  });
}

const start = async (): Promise<void> => {
  try {
    connection.authenticate().then(async() => {
      logger.info('database connected');
      try {
        await connection.sync({ force: true }).then(()=> {
          initial();
        })
      } catch (e) {
        logger.error(e)
      }
    })

    app.listen(process.env.DB_PORT, () => {
      logger.info(`Server started on port ${process.env.DB_PORT}!`);
    });
  } catch (e) {
    console.log(e)
    process.exit(1);
  }
}

void start();

