import type { JSX } from "react";
import type { Social } from "../types";
import Container from "./container";

const icons: Record<Social["icon"], JSX.Element> = {
  github: <i className="fa-brands fa-github" />,
  twitter: <i className="fa-brands fa-x-twitter" />,
  google: <i className="fa-brands fa-google" />,
  linkedin: <i className="fa-brands fa-linkedin-in" />
};

export default function About({ data }: { data: {
  heading: string; bio: string; dob: string; languages: string; nationality: string; interests: string; social: Social[];
}}) {
  return (
    <section id="about" className="bg-white py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-ink-900">{data.heading}</h2>
            <p className="mt-6 text-lg text-ink-500">{data.bio}</p>
            <div className="mt-6 flex gap-4">
              {data.social.map(s => (
                <a key={s.icon} href={s.url} className="h-10 w-10 grid place-items-center rounded-full border text-ink-500 hover:text-brand-600 hover:border-brand-600">
                  <span className="text-sm">{icons[s.icon]}</span>
                </a>
              ))}
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-y-5">
            <Item label="Date of birth" value={data.dob} />
            <Item label="Spoken Langages" value={data.languages} />
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
    <div className="flex items-center text-ink-700">
      <span className="w-40 text-ink-500">{label}</span>
      <span className="mx-3">:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
