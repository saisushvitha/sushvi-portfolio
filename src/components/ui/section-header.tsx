type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ title, subtitle, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="mt-5 text-3xl font-medium text-slate-700">{title}</h2>

      {subtitle ? (
        <p className="mt-4 text-ink-500 max-w-3xl mx-auto italic">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
