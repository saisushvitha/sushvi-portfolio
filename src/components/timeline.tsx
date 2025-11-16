import type { EduItem, ExpItem } from "../types";
import { useState } from "react";
import Container from "./container";
import { Minus, Plus } from "lucide-react";

type TimelineProps = {
  data: {
    title: string;
    images: { education: string; experience: string };
    education: EduItem[];
    experience: ExpItem[];
  };
};

export default function Timeline({ data }: TimelineProps) {
  return (
    <section id="resume" className="bg-white py-10">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-medium text-slate-700">
            {data.title}
          </h2>
          <p className="mt-4 text-ink-500 max-w-3xl mx-auto">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning .
          </p>
        </div>

        {/* Education & Experience – stacked like the mock */}
        <div className="mt-12 space-y-12">
          <TimelineBlock
            label="Education"
            image={data.images.education}
            items={data.education}
            kind="edu"
          />
          <TimelineBlock
            label="Experience"
            image={data.images.experience}
            items={data.experience}
            kind="exp"
          />
        </div>
      </Container>
    </section>
  );
}

type BlockProps = {
  label: string;
  image: string;
  items: (EduItem | ExpItem)[];
  kind: "edu" | "exp";
};

function TimelineBlock({ label, image, items, kind }: BlockProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      {/* Left illustration panel */}
      <div className="w-full md:w-72 bg-[#f5fbff] flex flex-col items-center justify-center px-8 py-12">
        <img
          src={image}
          alt={label}
          className="w-32 h-32 object-contain mb-6"
        />
        <p className="text-xl font-semibold text-[#133b5c]">{label}</p>
      </div>

      {/* Right accordion list */}
      <div className="flex-1 bg-white">
        <div className="divide-y divide-slate-200">
          {items.map((item, index) =>
            kind === "edu" ? (
              <EduRow
                key={(item as EduItem).title + index}
                item={item as EduItem}
                defaultOpen={index === 0}
              />
            ) : (
              <ExpRow
                key={(item as ExpItem).title + index}
                item={item as ExpItem}
                defaultOpen={index === 0}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ----------------- Education row ----------------- */

function EduRow({
  item,
  defaultOpen = false,
}: {
  item: EduItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={open ? "bg-[#f5fbff]" : "bg-white"}>
      {/* Title + years */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-10 py-6 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 text-teal-500 text-xl font-bold">
            {open ? <Minus/> : <Plus/>}
          </span>
          <p className="text-base md:text-lg font-semibold text-[#133b5c]">
            {item.title}
          </p>
        </div>
        <span className="text-sm md:text-base font-semibold text-teal-500 whitespace-nowrap">
          {item.years}
        </span>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="px-16 pb-7 text-sm md:text-base text-ink-600">
          {item.body && <p className="mb-3">{item.body}</p>}
          {item.place && (
            <p className="font-semibold text-[#133b5c]">{item.place}</p>
          )}
        </div>
      )}
    </div>
  );
}

/* ----------------- Experience row ----------------- */

function ExpRow({
  item,
  defaultOpen = false,
}: {
  item: ExpItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={open ? "bg-[#f5fbff]" : "bg-white"}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-10 py-6 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 text-teal-500 text-xl font-bold">
            {open ? <Minus/> : <Plus/>}
          </span>
          <p className="text-base md:text-lg font-semibold text-[#133b5c]">
            {item.title}
          </p>
        </div>
        <span className="text-sm md:text-base font-semibold text-teal-500 whitespace-nowrap">
          {item.years}
        </span>
      </button>

      {open && (
        <div className="px-16 pb-7 text-sm md:text-base text-ink-600">
          {/* later you can render description / tags here */}
        </div>
      )}
    </div>
  );
}
