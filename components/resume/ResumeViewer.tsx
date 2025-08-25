'use client';

import { templateRegistry } from "@/utils/templateRegistry";
import { Resume } from "@/types/resume";

export default function ResumeViewer({template = 'classic', data}: {template: string | null; data: Resume}) {
    const Template = templateRegistry[template as keyof typeof templateRegistry];
    return Template ? <Template data={data} /> : <p>No template found</p>;
}