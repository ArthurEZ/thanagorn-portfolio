import { useEffect, useState } from "react";

export default function TypedText({ text, start, className = "", stay }: { text: string; start: boolean; className?: string, stay?: boolean}) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (!start) {
      setTyped("");
      return;
    }
    setTyped("");
    let i = 0;
    const interval = setInterval(() => {
      setTyped((prev) => {
        if (i <= text.length) {
          i++;
          return text.slice(0, i);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 12);
    return () => clearInterval(interval);
  }, [start, text]);
  return (
    <span className={className}>
      {typed}
      <span
        className="inline-block w-2 h-5 align-middle bg-gray-400 dark:bg-gray-600 animate-pulse ml-0.5"
        style={{ visibility: (typed.length < text.length || stay) ? "visible" : "hidden" }}
      />
    </span>
  );
} 