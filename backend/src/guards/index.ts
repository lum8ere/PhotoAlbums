import { shield } from "graphql-shield";

import { isAuthorized } from 'guards/rules/isAuthorized'

export const permissions = shield({
  Query: {},
  Mutation: {
    createUser: isAuthorized,
    updateUser: isAuthorized,
    deleteUser: isAuthorized,
    createRole: isAuthorized,
    updateRole: isAuthorized,
    deleteRole: isAuthorized,
  },
});