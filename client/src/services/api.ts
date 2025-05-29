import axios from 'axios';
import type { Job, SearchFilters, ResumeAnalysisResult } from '../types';


const API_BASE_URL = "https://resume-job-matcher-ukfy.onrender.com/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const jobService = {
    searchJobs: async (filters: SearchFilters): Promise<Job[]> => {
        const response = await api.get('/jobs', { params: filters });
        return response.data;
    },

    getJobById: async (id: number): Promise<Job> => {
        const response = await api.get(`/jobs/${id}`);
        return response.data;
    },
};

export const resumeService = {
    uploadResume: async (file: File): Promise<ResumeAnalysisResult> => {
        const formData = new FormData();
        formData.append('pdf', file);

        const response = await api.post('/resume/upload-file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    },
};

export const searchService = {
    trackSearch: async (keyword: string): Promise<void> => {
        await api.post('/search/track', { keyword });
    },
};