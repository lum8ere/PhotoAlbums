import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import "dotenv/config";
import UserModel from "models/user.model";
import RoleModel from "models/role.model";
import logger from "shared/logger";

export class AuthController {
  public static async signup(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password, first_name, last_name, phone, roles } =
        req.body;

      logger.debug(req.body);

      const hashedPassword = await bcrypt.hash(password, 8);
      const user = await UserModel.create({
        user_id: uuidv4(),
        username,
        email,
        password: hashedPassword,
        first_name,
        last_name,
        phone,
      });

      let roleIds = [1]; // Default role = 1

      if (roles) {
        const foundRoles = await RoleModel.findAll({
          where: {
            name: {
              [Op.or]: roles,
            },
          },
        });
        roleIds = foundRoles.map((role) => role.id);
      }

      await user.setRoles(roleIds);

      // res.send({ message: "User was registered successfully!" });
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        // roles: authorities,
        // accessToken: token,
      });
    } catch (e) {
      res.status(500).send({ message: "test" });
    }
  }

  public static async signin(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;

      const user = await UserModel.findOne({
        where: { username },
      });

      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }

      const passwordIsValid = await bcrypt.compare(password, user.password);

      if (!passwordIsValid) {
        res.status(401).send({ message: "Invalid password" });
        return;
      }

      const token = jwt.sign({ id: user.id }, "test", {
        expiresIn: 86400, // 24 hours
      });

      const roles = await user.getRoles();
      const authorities = roles.map(
        (role) => "ROLE_" + role.name.toUpperCase()
      );

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    } catch (err) {
      res.status(500).send({ message: "test" });
    }

    return;
  }
}
