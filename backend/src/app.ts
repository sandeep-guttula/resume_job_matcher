import express, { Request, Response } from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import jobRoutes from './routes/job.routes';
import searchRoutes from './routes/search.routes';


dotenv.config();

const app = express();
app.use(cors({
    origin: "*",
    credentials: true,
}));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/jobs', jobRoutes);
app.use('/api/search', searchRoutes);

app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json(
        {
            health: 'green'
        }
    );
});


export { app };