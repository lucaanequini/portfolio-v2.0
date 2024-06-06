'use client'

import { Navbar } from "@/components/navbar";
import { TitleSection } from "@/components/title-section";
import { About } from "@/components/about";
import { WorksSection } from "@/components/works/works-section";
import { CertSection } from "@/components/certs/cert-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer"


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, [])
  return (
    <div>
      <main className="w-full h-auto overflow-x-hidden">
        <div className="h-screen flex flex-col" id="home">
          <Navbar />
          <TitleSection />
        </div>
        <About />
        <WorksSection />
        <CertSection />
        <ContactSection />
        <Footer />
      </main>
    </div >
  );
}