import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}!`);
});