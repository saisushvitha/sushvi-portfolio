import { useEffect, useState } from "react";
import dataJson from "./data/site.json";
import type { SiteData } from "./types";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function App() {
  const [data, setData] = useState<SiteData | null>(null);
  useEffect(() => { setData(dataJson as SiteData); }, []);
  if (!data) return null;

  return (
    <div className="font-body text-ink-700">
      <Navbar brand={data.brand.logoText} />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills items={data.skills} />
        <Timeline data={data.education} />
        <Projects data={data.projects} />
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} brand={data.brand.logoText} />
    </div>
  );
}
