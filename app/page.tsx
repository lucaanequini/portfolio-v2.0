import { Navbar } from "@/components/navbar";
import { TitleSection } from "@/components/title-section";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <main className="w-full px-5 xl:px-40">
        <div className="h-screen flex flex-col">
          <Navbar />
          <TitleSection />
        </div>
        <About />
      </main>
    </div>
  );
}
