import { Resume } from "@/types/resume";

export default function ModernTemplate({ data }: { data: Resume }) {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-3 bg-gray-50 text-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white p-6 col-span-1">
        <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
        <p className="text-sm">{data.email}</p>
        <p className="text-sm">{data.phone}</p>
        <p className="text-sm">{data.address}</p>

        <h2 className="mt-6 font-semibold border-b border-gray-700 pb-1">
          Skills
        </h2>
        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
          {data.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-2 p-6">
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
          <p>{data.summary}</p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-bold">
                {exp.jobTitle} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-bold">
                {edu.degree} - {edu.school}
              </h3>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
              <p>{edu.institution}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
