import { Router } from 'express';
import { getJobById, getJobs } from '../controllers/job.controller';

const router = Router();

router.get('/', getJobs);
router.get('/:id', getJobById as any);

export default router;
