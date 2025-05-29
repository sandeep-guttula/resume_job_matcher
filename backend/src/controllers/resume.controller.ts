import { Request, Response } from 'express';
import fs from 'fs/promises'; 
import path from 'path';
import pdfParse from 'pdf-parse';
import multer from 'multer';
import prisma from '../config/db'; 
import { predictRoleFromText } from '../services/rolePredictor';

export const upload = multer({ dest: 'uploads/' });

export const handleResumeUpload = async (req: Request, res: Response): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  const filePath = path.join(__dirname, '../../uploads', req.file.filename);

  try {
    const fileBuffer = await fs.readFile(filePath);
    const pdfData = await pdfParse(fileBuffer);
    const resumeText = pdfData.text;

    const predictedRole = predictRoleFromText(resumeText);
    console.log('Predicted Role:', predictedRole);

    const matchedJobs = await prisma.job.findMany({
      where: {
        jobTitle: {
          contains: predictedRole,
          mode: 'insensitive',
        },
      },
    });

    res.json({ predictedRole, jobs: matchedJobs });
  } catch (err) {
    console.error('Resume processing error:', err);
    res.status(500).json({ message: 'Error processing resume' });
  } finally {
    try {
      await fs.unlink(filePath);
    } catch (unlinkErr) {
      console.error('Failed to delete uploaded file:', unlinkErr);
    }
  }
};
