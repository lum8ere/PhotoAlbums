import { rule } from "graphql-shield";

import { verifyToken } from "utils/index";

export const isAuthorized = rule()(async (ctx) => {
  const { authorization } = ctx.request.headers;
  if (!authorization) {
    return false;
  }

  const token = authorization.replace("Bearer", "").trim();

  const { user_id }: any = verifyToken(token);

  return !!user_id;
});
