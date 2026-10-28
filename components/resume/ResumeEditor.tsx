"use client";
import { Resume } from "@/types/resume";
import Skills from "./edit/Skills";
import Experiences from "./edit/Experiences";
import Educations from "./edit/Educations";
import AIAssistButton from "./AIAssistButton";

export const inputClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow";
export const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

export default function ResumeEditor({
  data,
  onChange,
}: {
  data: Resume;
  onChange: (data: Resume) => void;
}) {
  return (
    <form className="space-y-6">
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Address</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-sm font-semibold text-gray-700">Summary</label>
          <AIAssistButton
            context={{
              type: "summary",
              existingText: data.summary,
              skills: data.skills,
            }}
            onResult={(text) => onChange({ ...data, summary: text })}
          />
        </div>
        <textarea
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          rows={4}
          className={inputClass}
        />
      </div>

      <div className="pt-5 border-t border-gray-200">
        <Skills
          skills={data.skills}
          update={(field, value) => onChange({ ...data, [field]: value })}
        />
      </div>

      <div className="pt-5 border-t border-gray-200">
        <Experiences
          experience={data.experience}
          update={(field, value) => onChange({ ...data, [field]: value })}
        />
      </div>

      <div className="pt-5 border-t border-gray-200">
        <Educations
          education={data.education}
          update={(field, value) => onChange({ ...data, [field]: value })}
        />
      </div>
    </form>
  );
}
