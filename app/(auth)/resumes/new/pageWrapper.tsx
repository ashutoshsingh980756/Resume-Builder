"use client";

import { useSearchParams } from "next/navigation";
import { templateRegistry } from "@/utils/templateRegistry";
import { resumeMockData } from "@/app/data/resumeMockData";
import { toCapitalized } from "@/utils/stringHelpers";
import Link from "next/link";

export default function PageWrapper() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");

  const Template = templateId
    ? templateRegistry[templateId as keyof typeof templateRegistry]
    : null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {toCapitalized(templateId ? templateId : "")} Template
      </h1>
      {Template ? (
        <Template data={resumeMockData} />
      ) : (
        <div>
          <Link href="/templates">Back to Templates</Link>
          <p className="text-gray-600">Please select a template first.</p>
        </div>
      )}
    </div>
  );
}
