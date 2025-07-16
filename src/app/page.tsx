import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./components/loadingPage";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const SkillsSection = dynamic(() => import("./components/SkillsSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const FooterSection = dynamic(() => import("./components/FooterSection"));


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col items-center px-4">
      <Suspense fallback={<Loading />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FooterSection />
      </Suspense>
    </main>
  );
}
