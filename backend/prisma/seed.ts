// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import readline from 'readline';
import path from 'path';

const prisma = new PrismaClient();

const REQUIRED_FIELDS = [
    'job_title',
    'company_name',
    'job_location',
    'apply_link',
    'job_description',
    'source',
  ];

const seed = async () => {
  const filePath = path.join(__dirname, 'jobs.jsonl');

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  let count = 0;
  let skipped = 0;
  for await (const line of rl) {
    
    let jobData: any;

    try {
        jobData = JSON.parse(line);
    } catch (error) {
        console.warn(`⚠️ Skipping malformed JSON: ${line}`);
        skipped++;
        continue;
    }

    const hasRequiredFields = REQUIRED_FIELDS.every((field) => field in jobData);
    if (!hasRequiredFields) {
      console.warn(`⚠️ Skipping job with missing required fields: ${JSON.stringify(jobData)}`);
      skipped++;
      continue;
    }

    try {
        await prisma.job.create({
            data: {
                jobTitle: jobData.job_title,
                companyName: jobData.company_name,
                jobLocation: jobData.job_location,
                applyLink: jobData.apply_link,
                jobDescription: jobData.job_description,
                source: jobData.source,
            }
        })
        count++;
    } catch (err: any) {
        console.warn(`Failed to insert job (${jobData.job_title} at ${jobData.company_name}): ${err.message}`);
        skipped++;
    }
  }

  console.log('Done seeding!');
  console.log(`${count} jobs inserted.`);
  console.log(`${skipped} jobs skipped.`);
};

seed()
  .catch((err) => {
    console.error('❌ Seeding error:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
