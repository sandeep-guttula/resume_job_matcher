import express from 'express';
import { handleResumeUpload } from '../controllers/resume.controller';
import { upload } from '../middlewares/upload.middleware';

const router = express.Router();

router.post('/upload-file', upload.single('pdf'), handleResumeUpload);

export default router;
