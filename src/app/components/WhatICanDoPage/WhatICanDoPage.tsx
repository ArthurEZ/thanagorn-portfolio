"use client";

import { useState } from "react";
import ForCustomer from "./ForCustomer";
import ForCompany from "./ForCompany";

export default function WhatICanDoPage() {
  const [tab, setTab] = useState<"customer" | "company">("customer");

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent">What I Can Do</h1>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-700 font-semibold transition-colors duration-200 focus:outline-none ${tab === "customer" ? "bg-blue-600 text-white" : "bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
          onClick={() => setTab("customer")}
        >
          For Customer
        </button>
        <button
          className={`px-6 py-2 rounded-r-full border border-gray-300 dark:border-gray-700 font-semibold transition-colors duration-200 focus:outline-none ${tab === "company" ? "bg-violet-600 text-white" : "bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
          onClick={() => setTab("company")}
        >
          For Company
        </button>
      </div>
      <div className="bg-white dark:bg-black/60 rounded-2xl shadow p-6 min-h-[180px] transition-colors duration-300">
        {tab === "customer" ? <ForCustomer /> : <ForCompany />}
      </div>
    </section>
  );
}
