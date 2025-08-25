// utils/templateRegistry.ts
import ClassicTemplate from "@/components/resume/templates/ClassicTemplate";
import ModernTemplate from "@/components/resume/templates/ModernTemplate";
import CreativeTemplate from "@/components/resume/templates/CreativeTemplate";

// map templateId → component
export const templateRegistry = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  creative: CreativeTemplate,
};

export type TemplateId = keyof typeof templateRegistry; // "classic" | "modern" | "creative"
