import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

import logger from 'shared/logger';
import RoleModel from 'models/role.model';

import { connection } from 'db';
import { createApolloServer, applyApolloServerMiddleware } from './graphql/apolloServer';

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
    await connection.authenticate();
    logger.info('database connected');

    await connection.sync({ force: true });
    initial();

    const server = createApolloServer();
    applyApolloServerMiddleware(server, app);

    app.listen(process.env.DB_PORT, () => {
      logger.info(`Server started on port ${process.env.DB_PORT}!`);
      logger.info(`ApolloServer launched by "http://localhost:3000/graphql"`)
    });
  } catch (e) {
    console.log(e)
    process.exit(1);
  }
}

void start();