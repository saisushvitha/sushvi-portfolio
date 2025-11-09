import type { EduItem, ExpItem } from "../types";
import { useState } from "react";
import Container from "./container";
import Card from "./card";

export default function Timeline({ data }: { data: { title: string; education: EduItem[]; experience: ExpItem[] } }) {
  return (
    <section id="resume" className="bg-white py-24">
      <Container>
        <div className="text-center">
          <span className="inline-block bg-brand-50 text-brand-600 px-3 py-1 rounded-lg text-sm font-semibold">LIFE TIME</span>
          <h2 className="mt-5 text-4xl font-extrabold text-ink-900">{data.title}</h2>
          <p className="mt-4 text-ink-500 max-w-3xl mx-auto">
            We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <Card>
            <Column title="Education">
              {data.education.map((e, i) => <Edu key={i} item={e} />)}
            </Column>
          </Card>
          <Card>
            <Column title="Experience">
              {data.experience.map((e, i) => <Exp key={i} item={e} />)}
            </Column>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-16 w-16 bg-slate-100 rounded-xl grid place-items-center">
          {/* simple illustration block */}
          <div className="h-8 w-8 bg-ink-900/80 rounded"></div>
        </div>
        <h3 className="text-2xl font-bold text-ink-900">{title}</h3>
      </div>
      <div className="divide-y">
        {children}
      </div>
    </div>
  );
}

function Edu({ item }: { item: EduItem }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="py-6">
      <div className="flex items-start justify-between">
        <button onClick={() => setOpen(!open)} className="text-left flex-1">
          <p className="text-lg font-semibold text-ink-900">{item.title}</p>
          {open && (
            <div className="mt-2 text-ink-600">
              {item.body && <p className="mb-2">{item.body}</p>}
              {item.place && <p className="font-medium">{item.place}</p>}
            </div>
          )}
        </button>
        <span className="text-brand-600 font-semibold">{item.years}</span>
      </div>
    </div>
  );
}

function Exp({ item }: { item: ExpItem }) {
  return (
    <div className="py-6">
      <div className="flex items-start justify-between">
        <p className="text-lg font-semibold text-ink-900">{item.title}</p>
        <span className="text-brand-600 font-semibold">{item.years}</span>
      </div>
    </div>
  );
}
