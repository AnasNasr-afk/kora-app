import express, { Express } from 'express';
import authRouter from './routes/auth.routes';
import { verifyEmail } from './controllers/email.controller';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.get('/verify-email', verifyEmail);

app.get('/', (_req, res) => {
  res.send('Welcome to Kora App Backend!');
});

export default app;
