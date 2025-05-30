import JobCard from "@/components/JobCard"
import ResumeUploadCard from "@/components/ResumeUploadCard"
import { useJobStore } from "@/store/jobStore"

const Home = () => {

    const { jobs } = useJobStore();

    return (
        <div>
            <ResumeUploadCard />
            {
                jobs.length > 0 ? (
                    <div className="">
                        {jobs.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-8">
                        <p className="text-xl">No jobs found. Please upload your resume to get started.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Home
