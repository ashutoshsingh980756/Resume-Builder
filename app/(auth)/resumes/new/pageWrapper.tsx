"use client";

import { useSearchParams } from "next/navigation";
import { templateRegistry } from "@/utils/templateRegistry";
import { resumeMockData } from "@/app/data/resumeMockData";
import { toCapitalized } from "@/utils/stringHelpers";
import { useState } from "react";
import ResumeEditor from "@/components/resume/ResumeEditor";
import ResumeViewer from "@/components/resume/ResumeViewer";

export default function PageWrapper() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  const [resumeData, setResumeData] = useState(resumeMockData);
  const templateName = toCapitalized(templateId || 'classic');
  return (
    <>
      <h1 className="mb-4 text-2xl text-center">You Have Selected <b>{templateName}</b> Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
        {/* Left - Editor */}
        <div className="bg-white shadow-lg rounded-xl p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Edit Resume</h2>
          <ResumeEditor data={resumeData} onChange={setResumeData} />
        </div>

        {/* Right - Live Preview */}
        <div className="bg-gray-50 shadow-inner rounded-xl p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Preview</h2>
          <ResumeViewer template={templateId} data={resumeData} />
        </div>
      </div>
    </>
  );
}
