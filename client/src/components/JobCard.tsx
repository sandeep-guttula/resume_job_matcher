import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const JobCard = (
    {
        jobTitle,
        companyName,
        jobLocation,
        jobDescription,
        applyLink,
        createdAt
    }: {
        jobTitle: string;
        companyName: string;
        jobLocation: string;
        jobDescription: string;
        applyLink: string;
        createdAt: string;
    }) => {

    return (
        <Card className="w-full max-w-6xl mx-auto my-4 shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">{jobTitle}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{companyName}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-700">{jobLocation}</p>
                <p className="mt-2 text-sm text-gray-600">{jobDescription}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <a href={applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Apply Now
                </a>
                <span className="text-xs text-gray-400">{new Date(createdAt).toLocaleDateString()}</span>
            </CardFooter>
        </Card>
    )
}

export default JobCard
