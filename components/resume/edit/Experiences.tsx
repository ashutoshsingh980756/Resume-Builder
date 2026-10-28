import { Plus, Trash2 } from "lucide-react";
import { Experience, Resume } from "@/types/resume";
import AIAssistButton from "../AIAssistButton";
import { inputClass } from "../ResumeEditor";

export default function Experiences({
  experience,
  update,
}: {
  experience: Experience[];
  update: <K extends keyof Resume>(field: K, value: Resume[K]) => void;
}) {
  const addExperience = () =>
    update("experience", [
      ...experience,
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        role: "",
      },
    ]);
  const updateExperience = (
    i: number,
    key: keyof Resume["experience"][number],
    value: string
  ) => {
    const next = [...experience];
    next[i] = { ...next[i], [key]: value };
    update("experience", next);
  };
  const removeExperience = (i: number) =>
    update(
      "experience",
      experience.filter((_, idx) => idx !== i)
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">Experience</h3>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg px-2.5 py-1 cursor-pointer transition-colors"
          onClick={addExperience}
        >
          <Plus size={13} /> Add
        </button>
      </div>

      {experience.map((exp, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/60"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              className={inputClass}
              placeholder="Job Title"
              value={exp.jobTitle}
              onChange={(e) => updateExperience(i, "jobTitle", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="Company"
              value={exp.company}
              onChange={(e) => updateExperience(i, "company", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="Start date"
              value={exp.startDate}
              onChange={(e) => updateExperience(i, "startDate", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="End date"
              value={exp.endDate}
              onChange={(e) => updateExperience(i, "endDate", e.target.value)}
            />
          </div>

          <input
            className={inputClass}
            placeholder="Role"
            value={exp.role}
            onChange={(e) => updateExperience(i, "role", e.target.value)}
          />

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-500">
                Description
              </span>
              <AIAssistButton
                context={{
                  type: "experience",
                  existingText: exp.description,
                  jobTitle: exp.jobTitle,
                  company: exp.company,
                  role: exp.role,
                }}
                onResult={(text) => updateExperience(i, "description", text)}
              />
            </div>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="What did you do in this role?"
              value={exp.description}
              onChange={(e) =>
                updateExperience(i, "description", e.target.value)
              }
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 cursor-pointer transition-colors"
              onClick={() => removeExperience(i)}
            >
              <Trash2 size={13} /> Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
