"use client";

import { useSearchParams } from "next/navigation";
import { resumeMockData } from "@/app/data/resumeMockData";
import { toCapitalized } from "@/utils/stringHelpers";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResumeEditor from "@/components/resume/ResumeEditor";
import ResumeViewer from "@/components/resume/ResumeViewer";

export default function PageWrapper() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  const [resumeData, setResumeData] = useState(resumeMockData);
  const templateName = toCapitalized(templateId || "classic");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/templates"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={15} /> Back to templates
        </Link>
        <p className="text-sm text-gray-500">
          Editing <span className="font-semibold text-gray-900">{templateName}</span>{" "}
          template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Edit Resume</h2>
          <ResumeEditor data={resumeData} onChange={setResumeData} />
        </div>

        <div className="lg:sticky lg:top-6">
          <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200/60 border-b border-gray-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-500">Live preview</span>
            </div>
            <div className="p-6 max-h-[calc(100vh-9rem)] overflow-y-auto">
              <ResumeViewer template={templateId} data={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
