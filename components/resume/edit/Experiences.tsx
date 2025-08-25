import { Plus, Trash2 } from "lucide-react";
import { Experience, Resume } from "@/types/resume";

export default function Experiences({experience, update}: {experience: Experience[]; update: (field: string, value: any) => void}) {
      const addExperience = () =>
    update("experience", [
      ...experience,
      { jobTitle: "", company: "", startDate: "", endDate: "", description: "", role: "" },
    ]);
  const updateExperience = (i: number, key: keyof Resume["experience"][number], value: string) => {
    const next = [...experience];
    next[i] = { ...next[i], [key]: value };
    update("experience", next);
  };
    const removeExperience = (i: number) =>
    update("experience", experience.filter((_, idx) => idx !== i));
    return <div className="space-y-2">
          <h3 className="font-medium">Experience</h3>
          <button type="button" className="text-sm px-3 py-1 border rounded cursor-pointer" onClick={addExperience}>+ Add</button>
          {experience.map((exp, i) => (
            <div key={i} className="border rounded p-3 grid grid-cols-2 gap-2">
              <input className="border p-2 rounded" placeholder="Job Title" value={exp.jobTitle} onChange={e => updateExperience(i, "jobTitle", e.target.value)} />
              <input className="border p-2 rounded" placeholder="Company" value={exp.company} onChange={e => updateExperience(i, "company", e.target.value)} />
              <input className="border p-2 rounded" placeholder="Start" value={exp.startDate} onChange={e => updateExperience(i, "startDate", e.target.value)} />
              <input className="border p-2 rounded" placeholder="End" value={exp.endDate} onChange={e => updateExperience(i, "endDate", e.target.value)} />
              <input className="border p-2 rounded col-span-2" placeholder="Role" value={exp.role} onChange={e => updateExperience(i, "role", e.target.value)} />
              <textarea className="border p-2 rounded col-span-2" rows={3} placeholder="Description" value={exp.description} onChange={e => updateExperience(i, "description", e.target.value)} />
              <div className="col-span-2 text-right">
                <button type="button" className="text-xs text-red-600 cursor-pointer" onClick={() => removeExperience(i)}>Remove</button>
              </div>
            </div>
          ))}
          </div>
}