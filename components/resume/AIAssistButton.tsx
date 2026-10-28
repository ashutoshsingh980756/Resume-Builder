"use client";

import { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";

export type AIDescriptionContext = {
  type: "summary" | "experience";
  existingText: string;
  jobTitle?: string;
  company?: string;
  role?: string;
  skills?: string[];
};

const TIMEOUT_MS = 20000;

export default function AIAssistButton({
  context,
  onResult,
}: {
  context: AIDescriptionContext;
  onResult: (text: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasExisting = context.existingText.trim().length > 0;

  async function handleClick() {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch("/api/ai/description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(context),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error("AI request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        onResult(text);
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("Timed out after 20s — check your network connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      console.error("AI assist failed:", err);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }

  return (
    <div className="inline-flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 hover:text-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        {loading ? (
          <Loader2 size={13} className="animate-spin" />
        ) : (
          <Sparkles size={13} />
        )}
        {loading
          ? "Writing..."
          : hasExisting
            ? "Improve with AI"
            : "Write with AI"}
      </button>
      {error && (
        <span className="inline-flex items-center gap-1 text-[11px] text-red-500">
          <AlertCircle size={11} /> {error}
        </span>
      )}
    </div>
  );
}
