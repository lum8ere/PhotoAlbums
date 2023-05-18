import { Request, Response, NextFunction} from "express";
import authJwt from 'middleware/authJwt';
import { UserController } from 'controllers/user.controller';

module.exports = function(app: any) {
    app.use(function(req: Request, res: Response, next: NextFunction) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/test/all", UserController.allAccess);
  
    app.get(
      "/api/test/user",
      [authJwt.verifyToken],
      UserController.userBoard
    );
  
    app.get(
      "/api/test/mod",
      [authJwt.verifyToken, authJwt.isModerator],
      UserController.moderatorBoard
    );
  
    app.get(
      "/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      UserController.adminBoard
    );
  };