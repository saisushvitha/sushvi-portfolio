import { Github, Twitter, Mail, Linkedin } from "lucide-react";
import type { Social } from "../types";
import Container from "./ui/container";
import type { JSX } from "react";

const icons: Record<Social["icon"], JSX.Element> = {
  github: <Github size={18} color="#334155" />,
  twitter: <Twitter size={18} color="#334155"/>,
  google: <Mail size={18} color="#334155"/>,
  linkedin: <Linkedin size={18} color="#334155"/>,
};

export default function About({ data }: {
  data: {
    heading: string;
    bio: string;
    dob: string;
    languages: string;
    nationality: string;
    interests: string;
    social: Social[];
  }
}) {
  return (
    <section id="about" className="bg-white py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="text-2xl sm:text-3xl font-medium text-slate-700 relative w-max mb-4">
              <span className="relative z-10">{data.heading}</span>
              <span className="absolute left-0 bottom-1 h-2 w-full bg-amber-300 z-0 rounded-sm" />
            </p>
            <p className="text-base text-cyan-950 text-lg mb-4">{data.bio}</p>

            <div className="flex gap-4 mt-4">
              {data.social.map((s) => (
               <a
               key={s.icon}
               href={s.url}
               target="_blank"
               rel="noopener noreferrer"
               className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-700 text-[#f8c046] hover:bg-[#f8c046]/10 transition"
             >
               {icons[s.icon]}
             </a>
             
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <dl className="grid grid-cols-1 gap-y-2 text-sm sm:text-base">
            <Item label="Date of birth" value={data.dob} />
            <Item label="Spoken Languages" value={data.languages} />
            <Item label="Nationality" value={data.nationality} />
            <Item label="Interest" value={data.interests} />
          </dl>
        </div>
      </Container>
    </section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center text-ink-500 text-sm sm:text-base">
      <span className="w-44 font-medium">{label}</span>
      <span className="mx-2">:</span>
      <span className="text-slate-500 font-medium">{value}</span>
    </div>
  );
}

