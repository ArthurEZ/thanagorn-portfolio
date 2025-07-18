import SkillCard from "./commons/SkillCard";

export default function SkillSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent tracking-tight">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        <SkillCard
          icon={"⚛️"}
          title="Frontend"
          description="Building beautiful, performant, and scalable user interfaces."
          badges={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
          className="animate-fadein"
        />
        <SkillCard
          icon={"🚂"}
          title="Backend"
          description="Developing robust APIs and backend services."
          badges={["Node.js", "Express.js", "MongoDB", "Prisma"]}
          className="animate-fadein delay-150"
        />
        <SkillCard
          icon={"🐳"}
          title="Fullstack & DevOps"
          description="Delivering complete solutions, from frontend to backend, with modern deployment."
          badges={["Docker", "Vercel", "CI/CD", "REST API"]}
          className="animate-fadein delay-300"
        />
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.9s cubic-bezier(0.4,0,0.2,1) both;
        }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
