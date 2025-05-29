import prisma from "../config/db";

export const JobService = {
  searchJobs: async (params: any) => {
    const { q, location, company, source, page = 1, limit = 10 } = params;
    const skip = (page - 1) * limit;

    return prisma.job.findMany({
      where: {
        jobTitle: q ? { contains: q, mode: 'insensitive' } : undefined,
        jobLocation: location ? { contains: location, mode: 'insensitive' } : undefined,
        companyName: company ? { contains: company, mode: 'insensitive' } : undefined,
        source: source || undefined,
      },
      skip: +skip,
      take: +limit,
    });
  },

  getJobById: async (id: number) => {
    return prisma.job.findUnique({ where: { id } });
  },
};
