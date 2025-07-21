import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./components/loadingPage";
import SkillSection from "./components/SkillSection";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const Experience = dynamic(() => import("./components/ExperienceSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const FooterSection = dynamic(() => import("./components/FooterSection"));

export default function Home() {
  const starColors = ["#2563eb", "#8b5cf6", "#f59e42"];
  return (
    <main className="min-h-screen bg-black text-gray-100 flex flex-col items-center relative overflow-hidden">
      {/* Starfield background */}
      <style>{`
        .starfield {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .star {
          position: absolute;
          border-radius: 9999px;
          opacity: 0.8;
          animation: twinkle 2.5s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }
      `}</style>
      <div className="starfield">
        {Array.from({ length: 160 }).map((_, i) => {
          const size = Math.random() * 2 + 2.5;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 2;
          const color = starColors[Math.floor(Math.random() * starColors.length)];
          return (
            <div
              key={i}
              className="star"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                background: color,
              }}
            />
          );
        })}
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <SkillSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <FooterSection />
        </Suspense>
      </div>
    </main>
  );
}
