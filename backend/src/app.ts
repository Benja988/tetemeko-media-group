import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv';

// Load env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

// Default Route
app.get('/', (req, res) => {
    res.send("Tetemeko media group is running... ✅")
});

export default app;