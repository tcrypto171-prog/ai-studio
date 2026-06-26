"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Zap,
  Tv,
  HelpCircle,
  Mail,
  LogIn,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Features", href: "/#features", icon: Sparkles },
  { label: "Pricing", href: "/pricing", icon: Zap },
  { label: "Devices", href: "/#devices", icon: Tv },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Login", href: "/login", icon: LogIn },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        className="fixed inset-y-0 left-0 z-50 hidden w-[280px] flex-col justify-between border-r border-white/10 bg-slate-950/95 px-6 py-8 text-slate-100 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:flex"
      >
        {/* Logo Section */}
        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300 ring-1 ring-cyan-300/30 shadow-lg shadow-cyan-500/20"
            >
              <Tv className="h-6 w-6" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] font-semibold text-cyan-300/90">
                Apollo
              </p>
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Premium
              </h1>
            </div>
          </motion.div>

          {/* Description */}
          <div className="space-y-2 border-b border-white/5 pb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Streaming
            </p>
            <p className="text-sm leading-5 text-slate-400">
              Premium IPTV with global channels and flawless performance.
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link href={item.href} className="block relative">
                    <motion.div
                      whileHover={{ x: 6 }}
                      className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="sidebar-indicator"
                          className="absolute -left-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                        />
                      ) : null}
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                      {isActive ? (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      ) : null}
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Promo Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="group rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 p-5 shadow-lg shadow-cyan-500/10"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Upgrade today
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Unlock premium channels and exclusive features.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950/95 px-5 py-4 backdrop-blur-xl md:hidden glass">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300"
          >
            <Tv className="h-5 w-5" />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-cyan-300/90">
              Apollo
            </p>
            <p className="text-xs text-slate-400">Premium</p>
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400/40 hover:bg-slate-900/95 hover:text-cyan-300"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: -280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -280, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute left-0 top-0 h-full w-[280px] border-r border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
                    <Tv className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] font-semibold text-cyan-300/90">
                      Apollo
                    </p>
                    <p className="text-xs text-slate-400">Premium</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
