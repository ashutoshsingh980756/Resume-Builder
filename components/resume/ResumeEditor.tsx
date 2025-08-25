'use client';
import { Resume } from "@/types/resume";
import Skills from "./edit/Skills";
import Experiences from "./edit/Experiences";
import Educations from "./edit/Educations";
export default function ResumeEditor({data, onChange}: {data: Resume, onChange: (data: Resume) => void}) {
    return  <form className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="text"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Summary */}
      <div>
        <label className="block text-sm font-medium">Summary</label>
        <textarea
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>
      {/* Skills */}
      <Skills skills={data.skills} update={(field, value) => onChange({ ...data, [field]: value })} />
        {/* Experiences */}
      <Experiences experience={data.experience} update={(field, value) => onChange({ ...data, [field]: value })} />
        {/* Experiences */}
      <Educations education={data.education} update={(field, value) => onChange({ ...data, [field]: value })} />
    </form>;
}