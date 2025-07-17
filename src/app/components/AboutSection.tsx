import ProfileImage from "./commons/profileimage";

export default function AboutSection() {
  return (
    <section id="about" className="w-full px-4 mobile:px-8 tablet:px-16 mb-12 pt-16 tablet:pt-24 flex justify-center">
      <div className="flex flex-col tablet:flex-row items-center tablet:items-center gap-25 w-full">
        <div className="flex flex-col items-center justify-center w-full tablet:w-auto h-full tablet:h-[220px] tablet:justify-center tablet:items-center">
          <ProfileImage />
        </div>
        <article className="flex-1">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
          <div className="border-b border-gray-200 dark:border-gray-700 mb-4" />
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Hi! I’m Thanagorn, a passionate web developer based in Thailand. I enjoy building beautiful, user-friendly websites and learning new technologies. My focus is on creating clean, efficient, and accessible digital experiences.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 pl-2 space-y-1">
            <li>Strong foundation in <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">TypeScript</span></li>
            <li>Skilled with <span className="font-semibold">Tailwind CSS</span> for rapid, responsive UI development</li>
            <li>Experience with modern deployment (Vercel) and version control (Git)</li>
            <li>Quick learner, team player, and detail-oriented</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            I’m currently seeking part-time freelance and internship opportunities to further develop my skills and contribute to exciting projects. Let’s build something great together!
          </p>
        </article>
      </div>
    </section>
  );
} 