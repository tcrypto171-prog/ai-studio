import Footer from "../../components/Footer";
import DashboardCard from "../../components/DashboardCard";
import Navbar from "../../components/Navbar";
import { dashboardStats, userSubscriptions } from "../../lib/content";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1600px] md:pl-[280px]">
        <section className="px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Dashboard</p>
                  <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Welcome back, Apollo user.</h1>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                    Monitor your channel usage, subscription status, and account insights from a premium console.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-sm text-slate-300">
                  <p className="uppercase tracking-[0.28em] text-cyan-300/80">Account status</p>
                  <p className="mt-4 text-3xl font-semibold text-white">Premium Active</p>
                  <p className="mt-2 leading-7 text-slate-400">Next renewal: Jun 28, 2026</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {dashboardStats.map((stat) => (
                <DashboardCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Active subscriptions</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Your current IPTV services</h2>
                </div>
                <p className="text-sm text-slate-400">Manage packages, renewals, and channel counts from one place.</p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80">
                <table className="min-w-full border-collapse text-left text-sm text-slate-200">
                  <thead className="bg-slate-950/95 text-slate-400">
                    <tr>
                      <th className="px-6 py-4">Subscription</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Renewal</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Channels</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userSubscriptions.map((item) => (
                      <tr key={item.name} className="border-t border-white/10 even:bg-slate-950/95">
                        <td className="px-6 py-5 font-semibold text-white">{item.name}</td>
                        <td className="px-6 py-5 text-cyan-300">{item.status}</td>
                        <td className="px-6 py-5 text-slate-300">{item.renewal}</td>
                        <td className="px-6 py-5 text-slate-300">{item.price}</td>
                        <td className="px-6 py-5 text-slate-300">{item.channelCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
