import { Plus, Trash2 } from "lucide-react";
import { Education, Resume } from "@/types/resume";

export default function Educations({education, update}: {education: Education[]; update: (field: string, value: any) => void}) {
      const addEducation = () =>
    update("education", [
      ...education,
      { degree: "", institution: "", startDate: "", endDate: "", school: "", description: ""  },
    ]);
  const updateEducation = (i: number, key: keyof Resume["education"][number], value: string) => {
    const next = [...education];
    next[i] = { ...next[i], [key]: value };
    update("education", next);
  };
    const removeEducation = (i: number) =>
    update("education", education.filter((_, idx) => idx !== i));
    return <div className="space-y-2">
          <h3 className="font-medium">Education</h3>
          <button type="button" className="text-sm px-3 py-1 border rounded cursor-pointer" onClick={addEducation}>+ Add</button>
          {education.map((edu, i) => (
            <div key={i} className="border rounded p-3 grid grid-cols-2 gap-2">
              <input className="border p-2 rounded" placeholder="Degree" value={edu.degree} onChange={e => updateEducation(i, "degree", e.target.value)} />
              <input className="border p-2 rounded" placeholder="institution" value={edu.institution} onChange={e => updateEducation(i, "institution", e.target.value)} />
              <input className="border p-2 rounded" placeholder="Start" value={edu.startDate} onChange={e => updateEducation(i, "startDate", e.target.value)} />
              <input className="border p-2 rounded" placeholder="End" value={edu.endDate} onChange={e => updateEducation(i, "endDate", e.target.value)} />
              <input className="border p-2 rounded" placeholder="School" value={edu.school} onChange={e => updateEducation(i, "school", e.target.value)} />
              <textarea className="border p-2 rounded col-span-2" rows={3} placeholder="Description" value={edu.description} onChange={e => updateEducation(i, "description", e.target.value)} />
              <div className="col-span-2 text-right">
                <button type="button" className="text-xs text-red-600 cursor-pointer" onClick={() => removeEducation(i)}>Remove</button>
              </div>
            </div>
          ))}
          </div>
}