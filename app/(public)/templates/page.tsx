import Link from "next/link";

import { templates } from "@/app/data/templates";
import { resumeMockData } from "@/app/data/resumeMockData";
import ClassicTemplate from "@/components/resume/templates/ClassicTemplate";
import ModernTemplate from "@/components/resume/templates/ModernTemplate";
import CreativeTemplate from "@/components/resume/templates/CreativeTemplate";

const PREVIEW_COMPONENTS = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  creative: CreativeTemplate,
} as const;

const ACCENTS = {
  classic: "bg-slate-700",
  modern: "bg-gray-900",
  creative: "bg-gradient-to-r from-blue-500 to-purple-600",
} as const;

export default function TemplateListPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose a Resume Template
        </h1>
        <p className="mt-3 text-gray-500">
          Pick a design — we&apos;ll drop your details straight in.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => {
          const Preview =
            PREVIEW_COMPONENTS[template.id as keyof typeof PREVIEW_COMPONENTS];

          return (
            <div
              key={template.id}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`h-1.5 ${ACCENTS[template.id as keyof typeof ACCENTS]}`}
              />

              <div className="h-80 overflow-hidden bg-gray-100 flex items-center justify-center select-none">
                <div className="w-[896px] shrink-0 scale-[0.23] pointer-events-none shadow-lg">
                  <Preview data={resumeMockData} />
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900">
                  {template.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {template.description}
                </p>
                <Link
                  href={`/resumes/new?template=${template.id}`}
                  className="mt-4 inline-flex items-center justify-center w-full rounded-lg bg-gray-900 text-white text-sm font-medium py-2.5 hover:bg-gray-800 transition-colors"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
