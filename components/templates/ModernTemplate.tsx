import { Resume } from "@/types/resume";

export default function ModernTemplate({ data }: { data: Resume }) {
  return (
    <div className="p-6 border rounded-lg">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>
        {data.email} | {data.phone}
      </p>

      <h2 className="mt-4 font-semibold">Experience</h2>
      <ul>
        {data.experience.map((exp, i) => (
          <li key={i}>
            <strong>{exp.role}</strong> @ {exp.company} ({exp.startDate} -{" "}
            {exp.endDate})
          </li>
        ))}
      </ul>

      <h2 className="mt-4 font-semibold">Education</h2>
      <ul>
        {data.education.map((edu, i) => (
          <li key={i}>
            {edu.degree}, {edu.school} {edu.endDate}, {edu.school}
          </li>
        ))}
      </ul>

      <h2 className="mt-4 font-semibold">Skills</h2>
      <p>{data.skills.join(", ")}</p>
    </div>
  );
}
