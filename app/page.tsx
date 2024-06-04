import { Navbar } from "@/components/navbar";
import { TitleSection } from "@/components/title-section";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <main className="w-full">
        <div className="h-screen flex flex-col" id="home">
          <Navbar />
          <TitleSection />
        </div>
        <About />
      </main >
    </div >
  );
}
