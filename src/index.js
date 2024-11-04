import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authRoutes } from './routes/auth.js';
import { router as postRoutes } from './routes/posts.js';
import { router as eventRoutes } from './routes/events.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});