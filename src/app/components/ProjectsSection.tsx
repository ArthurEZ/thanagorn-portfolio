"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/texts/Project";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const project = projects[current];

  const handlePrev = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimating(false);
    }, 500);
  };
  const handleNext = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 500);
  };

  return (
    <section className="w-full px-4 mobile:px-8 tablet:px-16 mb-12 flex flex-col items-center">
      <div className="flex flex-col items-center w-full mb-10">
        {/* Desktop arrows */}
        <div className="hidden sm:flex justify-center items-center w-full relative">
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900 rounded-full p-2 shadow transition"
            disabled={animating}
          >
            <span className="text-3xl text-orange-400">&#8592;</span>
          </button>
          <div className="z-10 w-80 h-80 tablet:w-[75%] tablet:h-175 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-lg flex items-center justify-center mx-auto transition-all duration-500 relative" style={{ opacity: animating ? 0.5 : 1 }}>
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900 rounded-full p-2 shadow transition"
            disabled={animating}
          >
            <span className="text-3xl text-orange-400">&#8594;</span>
          </button>
        </div>
        {/* Mobile arrows below image */}
        <div className="flex flex-col items-center w-full sm:hidden">
          <div className="z-10 w-[100%] h-60 rounded-2xl overflow-hidden border-4 border-orange-300 shadow-lg flex items-center justify-center mx-auto mb-4 transition-all duration-500 relative" style={{ opacity: animating ? 0.5 : 1 }}>
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="flex justify-center gap-8 w-full">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="bg-white/80 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900 rounded-full p-2 shadow transition"
              disabled={animating}
            >
              <span className="text-3xl text-orange-400">&#8592;</span>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="bg-white/80 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900 rounded-full p-2 shadow transition"
              disabled={animating}
            >
              <span className="text-3xl text-orange-400">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`relative w-full max-w-3xl mx-auto flex flex-col items-center text-center py-8 transition-all duration-500 ${animating ? (direction === 1 ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0") : "translate-x-0 opacity-100"}`}>
        <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg animate-fadein">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto animate-fadein delay-100">{project.description}</p>
        <a
          href={project.link}
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition text-lg animate-fadein delay-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.9s cubic-bezier(0.4,0,0.2,1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
} 