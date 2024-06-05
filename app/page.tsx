import { Navbar } from "@/components/navbar";
import { TitleSection } from "@/components/title-section";
import { About } from "@/components/about";
import { WorksSection } from "@/components/works/works-section";
import { TechStack } from "@/components/tech/tech-stack";
import { CertSection } from "@/components/certs/cert-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div>
      <main className="w-full h-auto">
        <div className="h-screen flex flex-col" id="home">
          <Navbar />
          <TitleSection />
        </div>
        <About />
        <TechStack />
        <WorksSection />
        <CertSection />
        <ContactSection />
      </main>
    </div >
  );
}
