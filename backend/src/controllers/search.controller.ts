import { Request, Response } from 'express';
import { SearchService } from '../services/search.service';

export const trackSearch = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.body;
    if (!keyword) return res.status(400).json({ error: 'Missing keyword' });

    await SearchService.trackKeyword(keyword);
    res.json({ message: 'Tracked' });
  } catch {
    res.status(500).json({ error: 'Failed to track keyword' });
  }
};
