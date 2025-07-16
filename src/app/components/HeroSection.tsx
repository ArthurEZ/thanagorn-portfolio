'use client';

import { useEffect, useState, useRef } from "react";
import Player from "lottie-react";
import waveloop from "../../../public/waveloop.json";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false); // NEW
  const hasAutoScrolled = useRef(false);

  useEffect(() => {
    setShow(true);
    const textTimer = setTimeout(() => setShowText(true), 1200);
    const handleSectionScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 80 && !hasAutoScrolled.current) {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          hasAutoScrolled.current = true;
        }
      } else if (scrollY < 40) {
        hasAutoScrolled.current = false;
      }
    };
    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleSectionScroll);
      clearTimeout(textTimer);
    };
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-center relative overflow-hidden px-4 sm:px-6 md:px-8">
      <div className="absolute bottom-[-250px] lg:bottom-[-150px] left-1/2 -translate-x-1/2 w-[200vw] h-[100vh] lg:w-[100vw]  z-0 pointer-events-none opacity-60">
        <Player autoplay loop animationData={waveloop} style={{ width: '100%', height: '100%' }} />
      </div>
      <style>{`
        @keyframes lightBlink {
          0% { opacity: 0; }
          20% { opacity: 1; }
          40% { opacity: 0.3; }
          60% { opacity: 1; }
          80% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
      <h1
        className={`text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg leading-[1.1] transition-all duration-700 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.5s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Thanagorn Portfolio
      </h1>
      <p
        className={`text-xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto transition-all duration-700 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.3s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Aspiring Web Developer & Designer
      </p>
      <button
        type="button"
        onClick={handleExploreClick}
        className={`inline-block px-8 sm:px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 text-white text-lg sm:text-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl hover:from-blue-700 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 mt-2 sm:mt-4 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.45s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Explore My Work
      </button>
    </section>
  );
}