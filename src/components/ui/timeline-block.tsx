import React from "react";
import Accordion, { AccordionItem } from "./accordion";
import { Minus, Plus } from "lucide-react";

type TimelineBlockProps<T> = {
  label: string;
  image: string;
  items: T[];
  getTitle: (item: T) => string;
  getYears: (item: T) => string;
  renderBody: (item: T) => React.ReactNode;
};

const TimelineBlock = <T,>({
  label,
  image,
  items,
  getTitle,
  getYears,
  renderBody,
}: TimelineBlockProps<T>) => {
  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      {/* Left panel */}
      <div className="w-full md:w-72 bg-[#f5fbff] flex flex-col items-center justify-center px-8 py-12">
        <img src={image} alt={label} className="w-32 h-32 object-contain mb-6" />
        <p className="text-xl font-semibold text-[#133b5c]">{label}</p>
      </div>

      {/* Right accordion */}
      <div className="flex-1 bg-white">
        <Accordion>
          {items.map((item, index) => {
            const defaultOpen = index === 0;

            return (
              <AccordionItem
                key={`${getTitle(item)}-${index}`}
                defaultOpen={defaultOpen}
                title={(open) => (
                  <>
                    <span className="mt-1 text-teal-500 text-xl font-bold">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                    <p className="text-base md:text-lg font-semibold text-[#133b5c]">
                      {getTitle(item)}
                    </p>
                  </>
                )}
                right={
                  <span className="text-sm md:text-base font-semibold text-teal-500 whitespace-nowrap">
                    {getYears(item)}
                  </span>
                }
              >
                {renderBody(item)}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default TimelineBlock;
