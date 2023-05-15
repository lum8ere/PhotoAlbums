// import { Request, Response } from 'express';
// import { pool } from 'db/db'
// import logger from 'shared/logger';

// // Получение списка пользователей
// export const getUsers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM "user"'); // Запрос на выборку всех записей из таблицы "user"
//     const users = result.rows;
//     client.release(); // Освобождение клиента

//     res.status(200).json(users);
//     // res.send(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Создание нового пользователя
// export const createUser = async (req: Request, res: Response): Promise<void> => {
//   const { login, password, email, first_name, last_name, phone } = req.body;

//   try {
//     const client = await pool.connect();
//     const result = await pool.query(
//       'INSERT INTO "user" (login, password, email, first_name, last_name, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//       [login, password, email, first_name, last_name, phone] // Параметры для подстановки в запрос
//     );
//     const newUser = result.rows[0];
//     client.release();

//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Получение пользователя по идентификатору
// export const getUserById = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;
//   logger.info(`[ID][${id}]`);

//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM "user" WHERE user_id = $1', [id]);
//     const user = result.rows[0];
//     client.release();

//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Обновление пользователя
// export const updateUser = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;
//   const { name, email } = req.body;

//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       'UPDATE "user" SET name = $1, email = $2 WHERE id = $3 RETURNING *',
//       [name, email, id]
//     );
//     const updatedUser = result.rows[0];
//     client.release();

//     if (updatedUser) {
//       res.status(200).json(updatedUser);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Удаление пользователя
// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//     const { id } = req.params;
  
//     try {
//       const client = await pool.connect();
//       const result = await client.query('DELETE FROM "user" WHERE id = $1 RETURNING *', [id]);
//       const deletedUser = result.rows[0];
//       client.release();
  
//       if (deletedUser) {
//         res.status(200).json({ message: 'User deleted successfully' });
//       } else {
//         res.status(404).json({ error: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };