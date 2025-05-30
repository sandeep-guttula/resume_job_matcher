import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import JobCard from "@/components/JobCard";
import { useJobStore } from "@/store/jobStore";
import { jobService } from "@/services/api";

const sourceOptions = [
    { label: "Indeed", value: "indeed" },
    { label: "Glassdoor", value: "glassdoor" },
    { label: "LinkedIn", value: "linkedin" },
];

const PAGE_SIZE = 10;

const Search = () => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");
    const [source, setSource] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const { jobs, setJobs } = useJobStore();

    const fetchJobs = async (pageNum = 1) => {
        setLoading(true);
        try {
            const results = await jobService.searchJobs({
                q: query,
                location,
                company,
                source,
                page: pageNum,
                limit: PAGE_SIZE,
            });
            setJobs(results);
            setHasMore(results.length === PAGE_SIZE);
        } catch (err) {
            setJobs([]);
            setHasMore(false);
            console.log("Error fetching jobs:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        await fetchJobs(1);
    };

    const handlePrev = async () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            await fetchJobs(newPage);
        }
    };

    const handleNext = async () => {
        if (hasMore) {
            const newPage = page + 1;
            setPage(newPage);
            await fetchJobs(newPage);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-background py-12">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 mb-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Search for Jobs</h1>
                <form onSubmit={handleSearch} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Job title, keyword"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="flex-1"
                        />
                        <Input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            className="flex-1"
                        />
                    </div>
                    <div className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Company name"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                            className="flex-[2]"
                        />
                        <div className="flex-[1]">
                            <Select value={source} onValueChange={setSource}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Source" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sourceOptions.map(opt => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button type="submit" disabled={loading || !query}>
                        {loading ? "Searching..." : "Search"}
                    </Button>
                </form>
            </div>
            <div className="w-full max-w-4xl">
                {jobs.length > 0 ? (
                    <>
                        {jobs.map(job => (
                            <JobCard key={job.id} {...job} />
                        ))}
                        <div className="flex justify-center gap-4 mt-8">
                            <Button
                                variant="outline"
                                onClick={handlePrev}
                                disabled={loading || page === 1}
                            >
                                Previous
                            </Button>
                            <span className="self-center text-gray-600">Page {page}</span>
                            <Button
                                variant="outline"
                                onClick={handleNext}
                                disabled={loading || !hasMore}
                            >
                                Next
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500 mt-8">
                        <p className="text-xl">No jobs found. Try searching for something else.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;