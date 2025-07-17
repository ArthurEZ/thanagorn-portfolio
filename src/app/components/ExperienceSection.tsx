import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="w-full px-4 mobile:px-8 tablet:px-16 mb-12">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent">Experience</h2>
      <div className="relative pl-12">
        <style>{`
          @keyframes node-pulse-1 {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.18); }
          }
          @keyframes node-pulse-2 {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.12); }
          }
          .node-pulse-1 { animation: node-pulse-1 2.2s cubic-bezier(0.4,0,0.2,1) infinite; }
          .node-pulse-2 { animation: node-pulse-2 2.7s cubic-bezier(0.4,0,0.2,1) infinite; }
        `}</style>
        <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-violet-400 to-orange-300 rounded-full" style={{ minHeight: '100%' }} />
        <ul className="flex flex-col gap-14">
          <li className="relative flex items-start gap-6">
            <div className="absolute left-[-52px] top-0 w-11 h-11 rounded-full bg-white border-4 border-blue-400 shadow-lg ring-2 ring-blue-200 dark:ring-violet-700 z-10 flex items-center justify-center node-pulse-1">
              <Image src="/next.svg" alt="Next.js" width={36} height={36} />
            </div>
            <div className="ml-2">
              <h3 className="font-bold text-lg">Frontend Developer Intern <span className="text-gray-500 dark:text-gray-400 font-normal">@ Tech Startup</span></h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Jun 2023 – Aug 2023</p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">Built and maintained modern React/Next.js web apps, collaborated with designers, and improved UI/UX with Tailwind CSS.</p>
            </div>
          </li>
          <li className="relative flex items-start gap-6">
            <div className="absolute left-[-52px] top-0 w-11 h-11 rounded-full bg-white border-4 border-violet-400 shadow-lg ring-2 ring-violet-200 dark:ring-violet-600 z-10 flex items-center justify-center node-pulse-2">
              <Image src="/vercel.svg" alt="Vercel" width={36} height={36} />
            </div>
            <div className="ml-2">
              <h3 className="font-bold text-lg">Freelance Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">2022 – Present</p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">Designed and deployed responsive websites for small businesses using Next.js, Vercel, and modern deployment workflows.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
} 