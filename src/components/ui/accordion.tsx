import React, { useEffect, useRef, useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

const Accordion = ({ children, className = "" }: AccordionProps) => {
  return <div className={`divide-y divide-slate-200 ${className}`}>{children}</div>;
};

export default Accordion;

type TitleRender = React.ReactNode | ((open: boolean) => React.ReactNode);

type AccordionItemProps = {
  title: TitleRender;
  right?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const AccordionItem = ({
  title,
  right,
  defaultOpen = false,
  children,
  className = "",
}: AccordionItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number>(0);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (open) setHeight(el.scrollHeight);
    else setHeight(0);
  }, [open, children]);

  useEffect(() => {
    if (!open) return;

    const onResize = () => {
      const el = innerRef.current;
      if (el) setHeight(el.scrollHeight);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  return (
    <div className={`${open ? "bg-[#f5fbff]" : "bg-white"} ${className}`}>
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-start justify-between gap-4 px-10 py-6 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          {typeof title === "function" ? title(open) : title}
        </div>

        {right ? <div className="shrink-0">{right}</div> : null}
      </button>

      {/* Smooth open/close */}
      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={innerRef} className="px-16 pb-7 text-sm md:text-base text-ink-600">
          {children}
        </div>
      </div>
    </div>
  );
};
