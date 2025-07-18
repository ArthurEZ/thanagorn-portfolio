// import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full px-4 mobile:px-8 tablet:px-16 mb-16 py-20 flex flex-col items-center bg-gradient-to-b from-white via-blue-50/60 to-orange-50/40 dark:from-black dark:via-gray-900/80 dark:to-gray-950/80 transition-all duration-700">
      <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg text-center animate-fadein">Contact</h2>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl animate-fadein delay-100">Interested in working together or have a question? Let&apos;s connect!</p>
      <a
        href="mailto:thanagorn@email.com"
        className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition mb-8 text-xl animate-fadein delay-200"
      >
        thanagorn@email.com
      </a>
      <div className="flex gap-8 justify-center animate-fadein delay-300">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-3xl transition font-bold border-2 border-blue-200 dark:border-blue-700 rounded-full px-6 py-2 bg-white/70 dark:bg-gray-900/70 shadow hover:scale-105">in</a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white text-3xl transition font-bold border-2 border-gray-200 dark:border-gray-700 rounded-full px-6 py-2 bg-white/70 dark:bg-gray-900/70 shadow hover:scale-105">GH</a>
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
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
} 