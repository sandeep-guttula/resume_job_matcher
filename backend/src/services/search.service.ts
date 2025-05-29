import prisma from "../config/db";

export const SearchService = {
  trackKeyword: async (keyword: string) => {
    await prisma.searchKeyword.upsert({
      where: { keyword },
      update: { searchCount: { increment: 1 } },
      create: { keyword },
    });
  },
};
