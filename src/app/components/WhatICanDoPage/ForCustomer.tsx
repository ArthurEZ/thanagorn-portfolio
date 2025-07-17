import SkillCard from "../commons/SkillCard";

const customerSkills = [
  {
    icon: "🚀",
    title: "Landing Page",
    description: "Create high-converting landing pages for products, events, or campaigns."
  },
  {
    icon: "📄",
    title: "1 Site Page",
    description: "Build a single, modern, responsive web page for your business or personal use."
  },
  {
    icon: "🖥️",
    title: "Advanced Web Platform",
    description: "Custom, interactive web applications with user accounts, database integration, and advanced features tailored to your needs."
  }
];

export default function ForCustomer() {
  return (
    <section className="bg-white/80 dark:bg-black/40 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent">For Customers</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-violet-400 to-orange-400 rounded-full mx-auto mb-8 opacity-60" />
      <div className="flex flex-col gap-6 max-w-xl mx-auto">
        {customerSkills.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} description={skill.description} />
        ))}
      </div>
    </section>
  );
} 