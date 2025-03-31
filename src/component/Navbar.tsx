'use client'
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center text-white py-6 px-8 md:px-32 drop-shadow-md relative">
      <ul className="hidden md:flex items-center gap-12 font-semibold text-base">
        <li className="text-white">home</li>
        <li className="text-white">project</li>
      </ul>

      <button 
        className="xl:hidden block text-5xl cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div 
        className={`absolute sm:hidden top-24 left-0 w-full flex flex-col items-center font-semibold text-lg transform transition-transform ${isOpen ? "opacity-100 translate-y-0" : "hidden translate-y-10"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
        <li className="list-none w-full text-center p-4">home</li>
        <li className="list-none w-full text-center p-4">project</li>
      </div>
    </header>
  );
}
