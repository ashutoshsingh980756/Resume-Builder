"use client";
import Link from "next/link";
import Image from "next/image";

import { templates } from "@/app/data/templates";

export default function TemplateListPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Choose a Resume Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded shadow hover:shadow-lg transition"
          >
            <Image
              src={template.image}
              alt={template.name}
              className="w-full h-48"
              width={100}
              height={100}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{template.name}</h2>
              <p className="text-gray-600">{template.description}</p>
              <Link
                href={`/resumes/new?template=${template.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Use Template →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
