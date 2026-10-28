import { Resume } from "@/types/resume";
import { v4 as uuidv4 } from "uuid";

const uniqueId = uuidv4();
export const resumeMockData: Resume = {
  id: uniqueId,
  name: "Ashutosh Singh",
  email: "ashu@example.com",
  phone: "123-456-7890",
  address: "Noida, UP, India",
  summary:
    "Senior Frontend Developer with 9+ years of experience building scalable, responsive web apps with React, Next.js, and TypeScript. Focused on performance, accessibility, and clean component architecture.",
  experience: [
    {
      jobTitle: "Senior Frontend Developer",
      company: "SiGMA World",
      startDate: "Aug 2025",
      endDate: "Present",
      description:
        "Built high-performance React features for an online lottery platform, collaborating closely with design and backend teams.",
      role: "Engineering",
    },
    {
      jobTitle: "Frontend Developer",
      company: "CareerBuilder",
      startDate: "Mar 2020",
      endDate: "Jul 2025",
      description:
        "Owned frontend architecture for a job portal, led accessibility efforts, and mentored junior engineers.",
      role: "Engineering",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Mindfire Solutions",
      startDate: "Oct 2017",
      endDate: "Sep 2019",
      description:
        "Delivered client projects and ran internal training sessions on CSS and HTML best practices.",
      role: "Engineering",
    },
  ],
  education: [
    {
      school: "I.G.N.O.U",
      degree: "Bachelor of Computer Applications (BCA)",
      startDate: "2013",
      endDate: "2016",
      institution: "I.G.N.O.U",
    },
    {
      school: "U.P Board",
      degree: "Intermediate",
      startDate: "2010",
      endDate: "2011",
      institution: "U.P Board",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Accessibility (WCAG)",
    "REST APIs",
    "Git",
  ],
};
