import express, { Express } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes';
import courtRouter from './routes/court.routes';
import { verifyEmail } from './controllers/email.controller';
dotenv.config();

const app: Express = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/courts', courtRouter);

app.get('/verify-email', verifyEmail);

app.get('/', (_req, res) => {
  res.send('Welcome to Kora App Backend!');
});

export default app;
