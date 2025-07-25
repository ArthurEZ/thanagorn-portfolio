"use client";

import ProfileImage from "./commons/profileimage";
import TypedText from "./commons/TypedText";
import { useEffect, useRef, useState } from "react";
import { AboutMe } from "@/texts/AboutMe";

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className={`w-full px-4 mobile:px-8 tablet:px-16 mb-12 pt-16 tablet:pt-32 flex justify-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ willChange: "opacity, transform" }}
    >
      <div className="flex flex-col tablet:flex-row items-center tablet:items-center gap-25 w-full">
        <div className="flex flex-col items-center justify-center w-full tablet:w-auto h-full tablet:h-[220px] tablet:justify-center tablet:items-center">
          <ProfileImage />
        </div>
        <article className="flex-1">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
          <div className="border-b border-gray-200 dark:border-gray-700 mb-4" />
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-2xl min-h-[4.5em]">
            <TypedText
              text={AboutMe.intro}
              start={visible}
            />
          </p>
        </article>
      </div>
    </section>
  );
} 