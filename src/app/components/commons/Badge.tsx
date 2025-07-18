import { ReactNode } from "react";

export default function Badge({ children, className = "", color }: { children: ReactNode; className?: string; color?: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold shadow-sm mr-2 mb-2 ${color ? "" : "bg-blue-400"} ${className}`}
      style={color ? { background: color } : {}}
    >
      {children}
    </span>
  );
} 