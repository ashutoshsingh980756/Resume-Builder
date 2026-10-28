import { google } from "@ai-sdk/google";
import { streamText } from "ai";

type AIDescriptionRequest = {
  type: "summary" | "experience";
  existingText?: string;
  jobTitle?: string;
  company?: string;
  role?: string;
  skills?: string[];
};

export async function POST(req: Request) {
  const { type, existingText, jobTitle, company, role, skills } =
    (await req.json()) as AIDescriptionRequest;

  const hasExisting = Boolean(existingText && existingText.trim().length > 0);

  const prompt =
    type === "summary"
      ? hasExisting
        ? `Rewrite this resume summary to be more concise and achievement-oriented, in 2-3 sentences. Return only the rewritten summary, no preamble or quotes:\n\n${existingText}`
        : `Write a 2-3 sentence professional resume summary for a frontend developer with these skills: ${
            skills && skills.length ? skills.join(", ") : "React, JavaScript"
          }. Return only the summary text, no preamble or quotes.`
      : hasExisting
        ? `Rewrite this resume job description to be more impactful and achievement-oriented, in 1-2 sentences. Return only the rewritten text, no preamble or quotes:\n\n${existingText}`
        : `Write a 1-2 sentence resume job description bullet point for the role "${jobTitle || "this role"}" at "${company || "this company"}" (${role || "Engineering"}). Return only the description text, no preamble or quotes.`;

  const result = streamText({
    model: google("gemini-3.8-flash"),
    prompt,
  });

  return result.toTextStreamResponse();
}
