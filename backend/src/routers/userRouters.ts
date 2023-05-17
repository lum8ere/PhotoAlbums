import { Router } from 'express';
import { UserController } from 'controllers/userController';

export const userRouter = Router();

userRouter.get('/', UserController.getUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.post('/create', UserController.createUser);
