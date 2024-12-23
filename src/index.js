import express from 'express';
import connectDB from './config/db.js';
import cors from "cors";
import { PORT } from './config/serverConfig.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

app.listen(PORT, async () => {
  console.log(`app listening at port ${PORT}`);
  await connectDB();
});