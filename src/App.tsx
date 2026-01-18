import { useEffect, useState } from "react";
import dataJson from "./data/site.json";
import type { SiteData } from "./types";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Work from "./components/work";


export default function App() {
  const [data, setData] = useState<SiteData | null>(null);
  useEffect(() => { setData(dataJson); }, []);
  if (!data) return null;

  return (
    <div className="font-body text-ink-700">
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills items={data.skills} />
        <Work data={data.education} />
        <Projects data={data.projects} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
}
