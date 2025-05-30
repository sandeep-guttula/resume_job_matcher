import { create } from 'zustand';
import type { Job, SearchFilters } from '../types';


interface JobStore {
    jobs: Job[];
    loading: boolean;
    error: string | null;
    searchFilters: SearchFilters;
    setJobs: (jobs: Job[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setSearchFilters: (filters: SearchFilters) => void;
}


export const useJobStore = create<JobStore>((set) => ({
    jobs: [],
    loading: false,
    error: null,
    searchFilters: {
        keyword: '',
        location: '',
        jobType: '',
        salaryRange: [0, 100000],
        experienceLevel: '',
    },

    setJobs: (jobs) => set({ jobs }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    setSearchFilters: (filters) => set({ searchFilters: filters }),
}));