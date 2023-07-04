import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer, ExpressContext  } from "apollo-server-express";
import { Express } from "express";

import resolvers from "graphql/resolvers/index";
import typeDefs from "graphql/schemas/index";
import { createContext } from "graphql/context/context";

export const createApolloServer = (): ApolloServer => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const server = new ApolloServer({ schema, context: createContext, });
  return server;
};

export const applyApolloServerMiddleware = async (
  server: ApolloServer,
  app: Express
): Promise<void> => {
  await server.start();
  server.applyMiddleware({ app });
};
