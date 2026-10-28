import { Plus, X } from "lucide-react";
import { Resume } from "@/types/resume";

export default function Skills({
  skills,
  update,
}: {
  skills: string[];
  update: <K extends keyof Resume>(field: K, value: Resume[K]) => void;
}) {
  const addSkill = () => update("skills", [...skills, ""]);
  const updateSkill = (i: number, value: string) => {
    const next = [...skills];
    next[i] = value;
    update("skills", next);
  };
  const removeSkill = (i: number) =>
    update(
      "skills",
      skills.filter((_, idx) => idx !== i)
    );

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 bg-violet-50 border border-violet-100 rounded-full pl-3 pr-1.5 py-1"
          >
            <input
              type="text"
              placeholder="Skill"
              className="bg-transparent text-sm text-violet-800 focus:outline-none w-24"
              value={s}
              onChange={(e) => updateSkill(i, e.target.value)}
            />
            <button
              type="button"
              className="text-violet-400 hover:text-red-500 cursor-pointer transition-colors"
              onClick={() => removeSkill(i)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 border border-dashed border-gray-300 rounded-full px-3 py-1.5 cursor-pointer transition-colors"
          onClick={addSkill}
        >
          <Plus size={13} /> Add Skill
        </button>
      </div>
    </div>
  );
}
