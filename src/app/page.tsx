import React from "react";
import Navbar from "@/component/Navbar";
import Banner from "@/component/home/Banner";

export default function Portfolio() {
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-slate-950 to-blue-950">
      <Navbar/> 
      <div className="flex flex-col items-center justify-center h-[75%] w-full">
        <Banner/>
      </div> 
    </div>
  );
}
