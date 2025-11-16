import Card from "./card";
import type { Skill } from "../types";

export default function Skills({ items }: { items: Skill[] }) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* flex row of small cards, centered */}
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((s) => (
            <div
              key={s.name}
              className="w-full sm:w-[250px] md:w-[250px] lg:w-[250px]"
            >
              <Card>
                <div className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-lg font-semibold text-ink-900">
                      {s.name}
                    </p>
                    <p className="text-sm text-ink-500">{s.exp}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
