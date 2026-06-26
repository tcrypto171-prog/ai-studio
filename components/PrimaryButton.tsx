import Link from "next/link";

type PrimaryButtonProps = {
  variant?: "solid" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  const sharedClasses = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
    variant === "solid"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClasses} {...props}>
      {children}
    </button>
  );
}
