type TabsProps = {
  items: string[];
  active: string;
  onChange: (value: string) => void;
  label?: string;
};

const Tabs = ({ items, active, onChange, label }: TabsProps) => {
  return (
    <div className="mt-10">
      {label && (
        <p className="mb-4 text-sm font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </p>
      )}

      <div className="border-b border-slate-200">
        <div className="flex gap-8">
          {items.map((item) => {
            const isActive = item === active;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onChange(item)}
                className={`relative pb-3 text-sm sm:text-base transition-colors ${
                  isActive
                    ? "text-ink-900 font-semibold"
                    : "text-ink-500 hover:text-ink-700"
                }`}
              >
                {item}

                {/* active indicator */}
                <span
                  className={`absolute left-0 -bottom-[1px] h-[2px] w-full rounded-full transition-all duration-300 ${
                    isActive ? "bg-teal-500" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
