'use client';

import SkillCard from "./commons/SkillCard";
import { useEffect, useRef, useState } from "react";

export default function SkillSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          setTimeout(() => setVisible(true), 10);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`w-full max-w-5xl mx-auto px-4 py-16 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ willChange: "opacity, transform" }}
    >
      <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent tracking-tight">Skills</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {/* vertical line */}
        <div className="block md:hidden absolute left-1/2 top-0 w-0.5 h-[100vh] bg-blue-400 -translate-x-1/2 z-0" />
        <div className="hidden md:block absolute left-0 right-0 top-[calc(100%/3+10rem)] h-16 pointer-events-none z-0">
          <div className="absolute left-1/6 w-0.5 h-16 bg-blue-400 mx-auto" style={{ left: '16.66%' }} />
          <div className="absolute left-5/6 w-0.5 h-[66px] bg-blue-400 mx-auto" style={{ left: '83.33%' }} />
          <div className="absolute left-1/6 w-4/6 h-0.5 bg-blue-400 top-16" />
        </div>
        <SkillCard
          title="Frontend"
          description="Building beautiful, performant, and scalable user interfaces."
          badges={[
            { src: "/NextjsIcon.svg", alt: "Next.js" },
            { src: "/ReactIcon.png", alt: "React" },
          ]}
          className="animate-fadein z-10"
        />
        <SkillCard
          title="Backend"
          description="Developing robust APIs and backend services."
          badges={[
            { src: "/NodejsIcon.svg", alt: "Node.js" },
          ]}
          className="animate-fadein delay-150 z-10"
        />
        <SkillCard
          title="Fullstack & DevOps"
          description="Delivering complete solutions, from frontend to backend, with modern deployment."
          badges={[
            { src: "/DockerIcon.svg", alt: "Docker" },
            { src: "/vercel.png", alt: "vercel" },
          ]}
          className="animate-fadein delay-300 z-10"
        />
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.9s cubic-bezier(0.4,0,0.2,1) both;
        }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
