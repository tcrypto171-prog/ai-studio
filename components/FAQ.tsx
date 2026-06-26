type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_50px_-25px] shadow-cyan-500/10 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
        <span>{question}</span>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-cyan-300 transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-5 text-sm leading-7 text-slate-300">{answer}</p>
    </details>
  );
}

export default function FAQ({ items }: { items: FAQItemProps[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
