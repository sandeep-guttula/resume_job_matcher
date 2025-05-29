import { jobRoleKeywords } from '../utils/jobRoleKeywords';

export const predictRoleFromText = (text: string): string => {
  const lowercaseText = text.toLowerCase();
  const roleScores: Record<string, number> = {};

  for (const [role, keywords] of Object.entries(jobRoleKeywords)) {
    roleScores[role] = keywords.reduce((score, keyword) => {
      return score + (lowercaseText.includes(keyword) ? 1 : 0);
    }, 0);
  }

  return Object.entries(roleScores).sort((a, b) => b[1] - a[1])[0][0];
};
