import { ReactNode } from "react";

export default function FrameIcon({ children, className = "", color }: { children: ReactNode; className?: string; color?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-[40px] h-[40px] rounded-full text-white text-2xl font-semibold shadow-sm mr-2 mb-2 ${color ? "" : "bg-white"} ${className}`}
      style={color ? { background: color } : {}}
    >
      {children}
    </span>
  );
} 