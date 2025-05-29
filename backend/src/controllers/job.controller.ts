import { Request, Response } from 'express';
import { JobService } from '../services/job.service';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await JobService.searchJobs(req.query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await JobService.getJobById(+req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
};
