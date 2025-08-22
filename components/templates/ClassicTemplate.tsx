import { Resume } from "@/types/resume";

export default function ClassicTemplate({ data }: { data: Resume }) {
  return (
    <div className="max-w-3xl mx-auto p-8 border border-gray-300 bg-white text-gray-900 font-serif">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm">
          {data.email} | {data.phone} | {data.address}
        </p>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">
          Summary
        </h2>
        <p>{data.summary}</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">
          Experience
        </h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">
              {exp.jobTitle} - {exp.company}
            </h3>
            <p className="text-sm italic">
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">
              {edu.degree} - {edu.school}
            </h3>
            <p className="text-sm italic">
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.institution}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">
          Skills
        </h2>
        <p>{data.skills.join(", ")}</p>
      </section>
    </div>
  );
}
