'use client';

import Image from "next/image";
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
      <div
        className={`w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-6 sm:mb-8 shadow-xl ring-4 ring-blue-400/30 overflow-hidden transition-all duration-700 z-10 ${show ? "opacity-100" : "opacity-0"}`}
        style={show ? { animation: "fadeUp 2s 1s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        <Image src="/Profile.png" alt="Profile Icon" width={192} height={192} className="object-cover w-full h-full" />
      </div>
      <h1
        className={`text-3xl sm:text-5xl md:text-7xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg leading-[1.15] md:leading-[1.1] transition-all duration-700 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.5s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Thanagorn Portfolio
      </h1>
      <p
        className={`text-lg sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6 sm:mb-8 max-w-xl mx-auto transition-all duration-700 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.3s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Aspiring Web Developer & Designer
      </p>
      <button
        type="button"
        onClick={handleExploreClick}
        className={`inline-block px-6 sm:px-8 py-3 rounded-full bg-blue-600 text-white text-base sm:text-lg font-semibold shadow hover:bg-blue-700 transition mt-2 sm:mt-4 z-10 ${showText ? "opacity-100" : "opacity-0"}`}
        style={showText && show ? { animation: "lightBlink 1.2s 0.45s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Explore My Work
      </button>
    </section>
  );
}