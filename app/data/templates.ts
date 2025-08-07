import { templatesProps } from "@/types/resumeTemplates";

import resumeDummyImage from "@/public/resumeDummyimage.jpg";

export const templates: templatesProps[] = [
  {
    id: "classic",
    name: "Classic Template",
    description: "Clean and professional",
    image: resumeDummyImage,
  },
  {
    id: "modern",
    name: "Modern Template",
    description: "Bold and modern layout",
    image: resumeDummyImage,
  },
  {
    id: "creative",
    name: "Creative Template",
    description: "Colorful and unique design",
    image: resumeDummyImage,
  },
];
