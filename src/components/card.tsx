export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(20,35,60,0.08)]">
      {children}
    </div>
  );
}