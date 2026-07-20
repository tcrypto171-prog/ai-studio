"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-all duration-300",
        active
          ? "text-amber-400"
          : "text-slate-300 hover:text-white",
        className
      )}
    >
      {children}

      <span
        className={cn(
          "absolute -bottom-1 left-0 h-[2px] rounded-full bg-amber-400 transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}