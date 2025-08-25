import { Resume } from "@/types/resume";

export default function CreativeTemplate({ data }: { data: Resume }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p>
          {data.email} | {data.phone} | {data.address}
        </p>
      </header>

      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600">Profile</h2>
          <p>{data.summary}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600">Experience</h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-4 border-l-4 border-purple-500 pl-3">
              <h3 className="font-bold">
                {exp.jobTitle} - {exp.company}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600">Education</h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-4 border-l-4 border-blue-400 pl-3">
              <h3 className="font-bold">
                {edu.degree} - {edu.school}
              </h3>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
              <p>{edu.institution}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-600">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
