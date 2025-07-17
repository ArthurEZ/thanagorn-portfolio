import SkillCard from "../commons/SkillCard";

const companySkills = [
  {
    icon: "📊",
    title: "Dashboards & Admin Panels",
    description: "Develop internal dashboards and admin panels for your business."
  },
  {
    icon: "🏢",
    title: "Company Websites",
    description: "Build and maintain professional company websites."
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Integrate APIs and third-party services seamlessly."
  },
  {
    icon: "⚡",
    title: "Performance & Accessibility",
    description: "Optimize your site for speed and accessibility."
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Collaborate with teams for scalable, maintainable solutions."
  }
];

export default function ForCompany() {
  return (
    <section className="bg-white/80 dark:bg-black/40 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent">For Companies</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-violet-400 to-orange-400 rounded-full mx-auto mb-8 opacity-60" />
      <div className="flex flex-col gap-6 max-w-xl mx-auto">
        {companySkills.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} description={skill.description} />
        ))}
      </div>
    </section>
  );
} 