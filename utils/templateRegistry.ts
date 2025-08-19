// utils/templateRegistry.ts
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import ModernTemplate from "@/components/templates/ModernTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";

// map templateId → component
export const templateRegistry = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  creative: CreativeTemplate,
};

export type TemplateId = keyof typeof templateRegistry; // "classic" | "modern" | "creative"
