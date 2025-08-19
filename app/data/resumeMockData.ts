import { Resume } from "@/types/resume";
import { v4 as uuidv4 } from "uuid";

const uniqueId = uuidv4();
export const resumeMockData: Resume = {
  id: uniqueId,
  name: "Ashutosh Singh",
  email: "ashu@example.com",
  phone: "123-456-7890",
  address: "123, street, NY, USA",
  summary: "some dummy summary",
  experience: [
    {
      jobTitle: "Frontend Dev",
      company: "Company A",
      startDate: "2021",
      endDate: "2023",
      description: "Worked on React apps",
      role: "Enginnering",
    },
  ],
  education: [
    {
      school: "XYZ University",
      degree: "B.Tech",
      startDate: "2021",
      endDate: "2024",
      institution: "Oxford Univercity",
    },
  ],
  skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
};
