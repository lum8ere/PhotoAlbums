import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "models/user.model";

interface AuthenticatedRequest extends Request {
  userId?: string;
}

const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token: string = (req.headers["x-access-token"] as string) || "";

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }

  return;
};

const checkRole =
  (requiredRole: string) =>
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const user: User | null = await User.findByPk(req.userId);
      if (user) {
        const roles = await user.getRoles();

        if (roles.some((role) => role.name === requiredRole)) {
          next();
          return;
        }
      }

      res.status(403).send({
        message: `Require ${requiredRole} Role!`,
      });
    } catch (err) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  };

const isAdmin = checkRole("admin");
const isModerator = checkRole("moderator");
const isModeratorOrAdmin = checkRole("moderator") || checkRole("admin");

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin,
};

export default authJwt;

// Убраны лишние приведения типов и проверки на существование токена. Вместо этого используется деструктуризация и проверка на ложное значение.
// Использован блок try-catch для обработки ошибок при проверке и декодировании токена.
// Общая логика проверки роли вынесена в отдельную функцию checkRole, которая возвращает middleware функцию для каждой роли.
// Удален повторяющийся код для проверки ролей.
// Использован метод some для проверки наличия требуемой роли у пользователя.
// Использовано ключевое слово export default для экспорта модуля authJwt.
// Удалены лишние вызовы next() после отправки ответа.