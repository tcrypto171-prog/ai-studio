type DashboardCardProps = {
  label: string;
  value: string;
  subtext: string;
};

export default function DashboardCard({ label, value, subtext }: DashboardCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/85 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-cyan-400/20">
      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{label}</p>
      <p className="mt-5 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-4 text-sm leading-6 text-slate-400">{subtext}</p>
    </div>
  );
}
