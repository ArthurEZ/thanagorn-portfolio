export default function ProjectsSection() {
  return (
    <section className="w-full max-w-2xl mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-1">Portfolio Website</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">A personal portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-1">Task Manager App</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">A simple and intuitive task manager app for tracking daily tasks, built with React and TypeScript.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-1">Landing Page Design</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">A modern, responsive landing page design for a startup, using Tailwind CSS and Figma.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-1">Blog Platform</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">A full-stack blog platform with Markdown support, authentication, and deployment on Vercel.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View Project</a>
        </div>
      </div>
    </section>
  );
} 