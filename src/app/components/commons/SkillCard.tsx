import { ReactNode } from "react";
import Badge from "./Badge";

interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  badges: string[];
  className?: string;
}

export default function SkillCard({ icon, title, description, badges, className = "" }: SkillCardProps) {
  return (
    <div
      className={`relative bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400/60 before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/30 before:pointer-events-none before:z-10 min-w-[280px] max-w-[350px] mx-auto ${className}`}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      {icon && (
        <div className="mb-5 flex items-center justify-center text-5xl flex-shrink-0 rounded-full">
          {icon}
        </div>
      )}
      <div className="w-full">
        <h3 className="font-extrabold text-2xl mb-2 drop-shadow-sm tracking-tight">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap items-center justify-center">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
} 