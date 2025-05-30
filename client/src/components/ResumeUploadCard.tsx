import { Upload } from "lucide-react";
import { useState, useRef } from 'react';
import { Button } from "./ui/button";

const ResumeUploadCard = () => {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleBoxClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    return (
        <div className="rounded-2xl p-10 w-full max-w-5xl mx-auto mt-8 border-gray-600 border-4">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
                Find Your Dream Job with AI-<br />Powered Matching
            </h1>

            <p className="text-lg mb-8">
                Upload your resume and let our smart algorithm find the perfect job matches for your skills and experience.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    <div
                        onClick={handleBoxClick}
                        className="cursor-pointer rounded-xl border-2 border-dashed flex flex-col items-center justify-center py-12 mb-4 hover:bg-gray-50 transition"
                    >
                        <Upload className="w-12 h-12 mb-2" />
                        <span className="font-medium text-lg">Click to Upload</span>
                        <span className="text-sm mt-2">PDF</span>
                    </div>

                    <input
                        ref={inputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {file && (
                        <div className="mb-2 text-gray-700 text-sm truncate">
                            Selected file: <span className="font-medium">{file.name}</span>
                        </div>
                    )}

                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleBoxClick}
                    >
                        Upload Resume
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResumeUploadCard;