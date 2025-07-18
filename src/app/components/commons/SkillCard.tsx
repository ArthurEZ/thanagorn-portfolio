import FrameIcon from "./FrameIcon";
import Image from "next/image";

interface BadgeIcon {
  src: string;
  alt: string;
  color?: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  badges: BadgeIcon[];
  className?: string;
}

export default function SkillCard({ title, description, badges, className = "" }: SkillCardProps) {
  return (
    <div
      className={`relative bg-white/80 dark:bg-gray-800/100 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400/60 before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/30 before:pointer-events-none before:z-10 min-w-[280px] max-w-[350px] mx-auto ${className}`}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="w-full">
        <h3 className="font-extrabold text-2xl mb-2 drop-shadow-sm tracking-tight">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap items-center justify-center">
          {badges.map((badge) => (
            <FrameIcon key={badge.alt} color={badge.color}>
              <Image src={badge.src} alt={badge.alt} width={70} height={70} />
            </FrameIcon>
          ))}
        </div>
      </div>
    </div>
  );
} 