export interface Job {
    id: number;
    jobTitle: string;
    companyName: string;
    jobLocation: string;
    applyLink: string;
    jobDescription: string;
    source: string;
    createdAt: string;
}

export interface SearchFilters {
    q?: string;
    location?: string;
    company?: string;
    source?: string;
    page?: number;
    limit?: number;
}

export interface ResumeAnalysisResult {
    predictedRole: string;
    jobs: Job[];
}