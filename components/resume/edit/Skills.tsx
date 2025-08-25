import { Plus, Trash2 } from "lucide-react";


export default function Skills({skills, update}: {skills: string[]; update: (field: string, value: any) => void}) {
    const addSkill = () => update("skills", [...skills, ""]);
  const updateSkill = (i: number, value: string) => {
    const next = [...skills];
    next[i] = value;
    update("skills", next);
  };
  const removeSkill = (i: number) => update("skills", skills.filter((_, idx) => idx !== i));

    return (
        
        <div className="space-y-2">
          <h3 className="font-medium">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <input type="text" className="border p-1 rounded" value={s} onChange={e => updateSkill(i, e.target.value)} />
                <button type="button" className="text-xs text-red-600 cursor-pointer" onClick={() => removeSkill(i)}><Trash2 size={16}/></button>
              </div>
            ))}
            <button type="button" className="text-sm px-3 py-1 border rounded cursor-pointer flex" onClick={addSkill}><Plus size={16}/> Add Skill</button>
          </div>
        </div>
    );
}