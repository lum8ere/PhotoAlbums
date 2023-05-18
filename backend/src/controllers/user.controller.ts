import { Request, Response } from "express";
import UserModel from "models/user.model";
import logger from "shared/logger";
import { v4 as uuidv4 } from "uuid";

export class UserController {
//   public static async getUsers(req: Request, res: Response): Promise<void> {
//     try {
//       const users = await UserModel.findAll();
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch users" });
//     }
//   }

//   public static async getUserById(req: Request, res: Response): Promise<void> {
//     const userId: string = req.params.id;

//     try {
//       const user = await UserModel.findByPk(userId);
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ error: "User not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch user" });
//     }
//   }

//   public static async createUser(req: Request, res: Response): Promise<void> {
//     const { username, email, password, first_name, last_name, phone } =
//       req.body;
//     logger.debug("[BODY]", req.body);
//     try {
//       const user = await UserModel.create({
//         user_id: uuidv4(),
//         username,
//         email,
//         password,
//         first_name,
//         last_name,
//         phone,
//       });
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to create user" });
//     }
//   }

//   public static async updateUser(req: Request, res: Response): Promise<void> {
//     const userId: string = req.params.id;
//     const { username, email, password, first_name, last_name, phone } =
//       req.body;

//     try {
//       const user = await UserModel.findByPk(userId);
//       if (user) {
//         await user.update({
//           username,
//           email,
//           password,
//           first_name,
//           last_name,
//           phone,
//         });
//         res.json(user);
//       } else {
//         res.status(404).json({ error: "User not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Failed to update user" });
//     }
//   }

//   public static async deleteUser(req: Request, res: Response): Promise<void> {
//     const userId: string = req.params.id;

//     try {
//       const user = await UserModel.findByPk(userId);
//       if (user) {
//         await user.destroy();
//         res.json({ message: "User deleted successfully" });
//       } else {
//         res.status(404).json({ error: "User not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Failed to delete user" });
//     }
//   }
  public static allAccess = (req: Request, res: Response) => {
    res.status(200).send("Public Content.");
  };

  public static userBoard = (req: Request, res: Response) => {
    res.status(200).send("Public Content.");
  };

  public static adminBoard = (req: Request, res: Response) => {
    res.status(200).send("Public Content.");
  };

  public static moderatorBoard = (req: Request, res: Response) => {
    res.status(200).send("Public Content.");
  };
}