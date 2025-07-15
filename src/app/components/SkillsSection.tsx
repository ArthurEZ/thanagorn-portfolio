import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className="w-full max-w-2xl mb-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        <li className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
          <Image src="/next.svg" alt="Next.js" width={20} height={20} /> Next.js
        </li>
        <li className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
          <Image src="/vercel.svg" alt="Vercel" width={20} height={20} /> Vercel
        </li>
        <li className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
          <Image src="/file.svg" alt="TypeScript" width={20} height={20} /> TypeScript
        </li>
        <li className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
          <Image src="/window.svg" alt="React" width={20} height={20} /> React
        </li>
        <li className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
          <span className="inline-block w-4 h-4 bg-blue-500 rounded-full" /> Tailwind CSS
        </li>
      </ul>
    </section>
  );
} 