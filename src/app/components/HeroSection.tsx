'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-center relative">
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div
        className={`w-36 h-36 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-8 shadow-lg transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}
        style={show ? { animation: "fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        <Image src="/globe.svg" alt="Profile Icon" width={96} height={96} />
      </div>
      <h1
        className={`text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg leading-[1.15] md:leading-[1.1] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}
        style={show ? { animation: "fadeUp 0.8s 0.15s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Thanagorn Portfolio
      </h1>
      <p
        className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-8 max-w-2xl mx-auto transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}
        style={show ? { animation: "fadeUp 0.8s 0.3s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Aspiring Web Developer & Designer
      </p>
      <a
        href="#contact"
        className={`inline-block px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition mt-4 ${show ? "opacity-100" : "opacity-0"}`}
        style={show ? { animation: "fadeUp 0.8s 0.45s cubic-bezier(0.4,0,0.2,1) forwards" } : {}}
      >
        Explore My Work
      </a>
    </section>
  );
} 