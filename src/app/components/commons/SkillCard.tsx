import { ReactNode } from "react";

interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function SkillCard({ icon, title, description, className = "" }: SkillCardProps) {
  return (
    <div
      className={`relative bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-lg p-6 flex flex-row items-center text-left border border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-gradient-to-r hover:from-blue-400 hover:via-violet-400 hover:to-orange-300 ${className}`}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      {icon && (
        <div className="mr-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-400 to-orange-400 text-white text-4xl shadow-md flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-extrabold text-2xl mb-1 drop-shadow-sm">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
