export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-2xl mb-12 pt-16 md:pt-24">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Hi! I’m Thanagorn, a passionate web developer based in Thailand. I enjoy building beautiful, user-friendly websites and learning new technologies. My focus is on creating clean, efficient, and accessible digital experiences.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 pl-2">
        <li>Strong foundation in <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">TypeScript</span></li>
        <li>Skilled with <span className="font-semibold">Tailwind CSS</span> for rapid, responsive UI development</li>
        <li>Experience with modern deployment (Vercel) and version control (Git)</li>
        <li>Quick learner, team player, and detail-oriented</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300">
        I’m currently seeking part-time freelance and internship opportunities to further develop my skills and contribute to exciting projects. Let’s build something great together!
      </p>
    </section>
  );
} 