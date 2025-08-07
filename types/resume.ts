export type Resume = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
};

export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
};
