"use client"; 

import { useEffect, useRef, useState } from "react";
import TypedText from "./commons/TypedText";
import { Experience } from "@/texts/Experience";
import Image from "next/image";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      ref={sectionRef}
      className={`w-full px-4 mobile:px-8 tablet:px-16 mb-12 transition-all duration-700 ease-out translate-y-0"`}
      style={{ willChange: "opacity, transform" }}
    >
      <div className="relative flex flex-col items-center">
        <style>{`
          @keyframes node-pulse-1 {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.18); }
          }
          @keyframes node-pulse-2 {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.12); }
          }
          .node-pulse-1 { animation: node-pulse-1 2.2s cubic-bezier(0.4,0,0.2,1) infinite; }
          .node-pulse-2 { animation: node-pulse-2 2.7s cubic-bezier(0.4,0,0.2,1) infinite; }
        `}</style>
        {/* vertical timeline line */}
        <div className="absolute left-1/2 top-[-60px] w-0.5 h-[80vh] tablet:h-[70vh] desktop:h-[55vh] bg-gradient-to-b from-blue-400 via-violet-400 to-orange-300 -translate-x-1/2 z-0 rounded-full" />
        <ul className="flex flex-col gap-20 w-full">
          {Experience.map((exp, idx) => (
            <li
              key={idx}
              className={`relative flex flex-col md:flex-row${idx % 2 === 1 ? "-reverse" : ""} items-center md:items-start gap-6 w-full${idx === 0 ? " mt-12" : ""}`}
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${idx === 0 ? "top-12" : "top-0"} w-11 h-11 rounded-full bg-white border-4 ${idx === 0 ? "border-blue-400 shadow-lg ring-2 ring-blue-200 dark:ring-violet-700 node-pulse-1" : "border-violet-400 shadow-lg ring-2 ring-violet-200 dark:ring-violet-600 node-pulse-2"} z-10 flex items-center justify-center`}
              >
                {exp.icon && (
                  <Image src={exp.icon} alt={exp.title} width={20} height={20} />
                )}
              </div>
              <div className={`${idx === 0 ? "mt-28 md:mt-12 ml-auto w-full md:w-1/2 pl-0 md:pl-20 text-center md:text-left" : "mt-16 md:mt-0 mr-auto w-full md:w-1/2 pr-0 md:pr-20 text-center md:text-right"}`}>
                <h3 className="font-bold text-lg">
                  <TypedText text={exp.title} start={visible} />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <TypedText text={exp.date} start={visible} />
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <TypedText text={exp.description} start={visible} stay={true}/>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
