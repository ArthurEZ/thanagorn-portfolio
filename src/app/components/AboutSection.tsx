"use client";

import ProfileImage from "./commons/profileimage";
import TypedText from "./commons/TypedText";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`w-full px-4 mobile:px-8 tablet:px-16 mb-12 pt-16 tablet:pt-24 flex justify-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
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
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg min-h-[4.5em]">
            <TypedText
              text="Hi! I’m Thanagorn, a passionate web developer based in Thailand. I enjoy building beautiful, user-friendly websites and learning new technologies. My focus is on creating clean, efficient, and accessible digital experiences."
              start={visible}
            />
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 pl-2 space-y-1">
            <li>
              <TypedText
                text="Strong foundation in React, Next.js, and TypeScript"
                start={visible}
              />
            </li>
            <li>
              <TypedText
                text="Skilled with Tailwind CSS for rapid, responsive UI development"
                start={visible}
              />
            </li>
            <li>
              <TypedText
                text="Experience with modern deployment (Vercel) and version control (Git)"
                start={visible}
              />
            </li>
            <li>
              <TypedText
                text="Quick learner, team player, and detail-oriented"
                start={visible}
              />
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            <TypedText
              text="I’m currently seeking part-time freelance and internship opportunities to further develop my skills and contribute to exciting projects. Let’s build something great together!"
              start={visible}
              stay={true}
            />
          </p>
        </article>
      </div>
    </section>
  );
} 