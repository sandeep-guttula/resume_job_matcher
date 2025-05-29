import { Router } from 'express';
import { trackSearch } from '../controllers/search.controller';

const router = Router();

router.post('/track', trackSearch as any);

export default router;
