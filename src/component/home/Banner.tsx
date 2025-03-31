"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Banner(){
    return(
        <div className="flex flex-col items-center justify-center h-screen text-white relative">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900 opacity-80"></div>
            
            <motion.h1 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold z-10 text-center"
            >
                Welcome to My Portfolio
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.3 }}
                className="text-lg md:text-5xl text-gray-300 mt-4 max-w-2xl text-center z-10"
            >
                Hi, I'm a passionate developer building creative and innovative projects.
            </motion.p>

            {/* Call to Action */}
            <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 px-8 py-5 border-2 border-transparent rounded-full 
                        text-white font-semibold text-lg shadow-lg 
                        bg-gradient-to-r from-slate-950 to-blue-950 
                        bg-clip-text text-transparent 
                        hover:bg-white hover:text-black transition-all duration-300 
                        relative z-10 
                        before:absolute before:inset-0 before:rounded-full 
                        before:bg-gradient-to-r before:from-purple-500 before:to-cyan-500 
                        before:z-[-1] before:transition-all before:duration-300 
                        hover:before:scale-110"
            >
            View Projects
            </motion.a>


        </div>
    )
}