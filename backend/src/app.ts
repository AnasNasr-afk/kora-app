import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Kora App Backend!');
});

export default app;
