type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
};

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
}: FormFieldProps) {
  return (
    <label className="space-y-3 text-sm text-slate-100">
      <span className="font-medium text-slate-200">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className="min-h-[140px] w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
        />
      )}
    </label>
  );
}
