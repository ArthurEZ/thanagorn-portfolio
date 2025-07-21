export default function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 py-4 flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-2 items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wide mr-1">Contact:</span>
        <a href="https://www.linkedin.com/in/%E0%B8%98%E0%B8%99%E0%B8%81%E0%B8%A3-%E0%B8%9E%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B8%8A%E0%B8%B1%E0%B8%A2-709080376/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-xl transition font-bold rounded-full px-2 py-1 hover:bg-blue-100 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-300">in</a>
        <a href="https://github.com/ArthurEZ" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white text-xl transition font-bold rounded-full px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-gray-400">GH</a>
        <a href="mailto:thanagorn2005@gmail.com" aria-label="Email" className="text-orange-600 dark:text-orange-400 hover:text-orange-800 text-xl transition font-bold rounded-full px-2 py-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 focus:outline-none focus:ring-2 focus:ring-orange-300">@</a>
      </div>
      <div className="text-xs text-gray-400 tracking-wide">
        &copy; {new Date().getFullYear()} Thanagorn Portfolio. All rights reserved.
      </div>
    </footer>
  );
} 