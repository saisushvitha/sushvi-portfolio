const Textarea = ({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) => {
  return (
    <textarea
      {...props}
      className={`w-full min-h-[170px] resize-y bg-slate-50 border border-slate-200 rounded-xl px-5 py-4
      text-ink-900 placeholder:text-slate-400
      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white
      transition ${className}`}
    />
  );
};

export default Textarea;