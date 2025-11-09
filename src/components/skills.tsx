import type { Skill } from "../types";

export default function Skills({ items }: { items: Skill[] }) {
  return (
    <section className="bg-white">
     <div className="container-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {items.map(s => (
          <div key={s.name} className="card p-4 sm:p-6 flex items-center gap-4">
            <img src={s.logo} alt={s.name} className="h-10 w-10 object-contain" />
            <div>
              <p className="text-lg font-semibold text-ink-900">{s.name}</p>
              <p className="text-sm text-ink-500">{s.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
