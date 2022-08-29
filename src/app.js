import './database/index.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import complaintRoutes from './routes/complaintRoute.js';

dotenv.config()

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/v1', complaintRoutes);
  }
}

export default new App().app;