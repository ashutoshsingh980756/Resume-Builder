import { Plus, Trash2 } from "lucide-react";
import { Education, Resume } from "@/types/resume";
import { inputClass } from "../ResumeEditor";

export default function Educations({
  education,
  update,
}: {
  education: Education[];
  update: <K extends keyof Resume>(field: K, value: Resume[K]) => void;
}) {
  const addEducation = () =>
    update("education", [
      ...education,
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        school: "",
        description: "",
      },
    ]);
  const updateEducation = (
    i: number,
    key: keyof Resume["education"][number],
    value: string
  ) => {
    const next = [...education];
    next[i] = { ...next[i], [key]: value };
    update("education", next);
  };
  const removeEducation = (i: number) =>
    update(
      "education",
      education.filter((_, idx) => idx !== i)
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">Education</h3>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg px-2.5 py-1 cursor-pointer transition-colors"
          onClick={addEducation}
        >
          <Plus size={13} /> Add
        </button>
      </div>

      {education.map((edu, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/60"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              className={inputClass}
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => updateEducation(i, "degree", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                updateEducation(i, "institution", e.target.value)
              }
            />
            <input
              className={inputClass}
              placeholder="Start date"
              value={edu.startDate}
              onChange={(e) => updateEducation(i, "startDate", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="End date"
              value={edu.endDate}
              onChange={(e) => updateEducation(i, "endDate", e.target.value)}
            />
          </div>

          <input
            className={inputClass}
            placeholder="School"
            value={edu.school}
            onChange={(e) => updateEducation(i, "school", e.target.value)}
          />

          <textarea
            className={inputClass}
            rows={3}
            placeholder="Description (optional)"
            value={edu.description}
            onChange={(e) =>
              updateEducation(i, "description", e.target.value)
            }
          />

          <div className="text-right">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 cursor-pointer transition-colors"
              onClick={() => removeEducation(i)}
            >
              <Trash2 size={13} /> Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
