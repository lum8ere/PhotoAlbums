import { makeExecutableSchema } from "graphql-tools";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";
import { Express } from "express";

import { permissions } from 'guards/index'
import { resolvers } from "graphql/resolvers/index";
import typeDefs from "graphql/schemas/index";

export const createApolloServer = (): ApolloServer => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schemaWithPermissions = applyMiddleware(schema, ...[permissions]);
  const server = new ApolloServer({ 
    schema: schemaWithPermissions,
    // schema,
    context: ({ request, resquest }: any) => ({
      request,
      resquest,
    }), });
  return server;
};

export const applyApolloServerMiddleware = async (
  server: ApolloServer,
  app: Express
): Promise<void> => {
  await server.start();
  server.applyMiddleware({ app });
};
