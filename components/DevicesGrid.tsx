export default function DevicesGrid() {
  const devices = ["Amazon Firestick", "Android TV", "Apple TV", "Smart TVs", "Smartphones"]; 
  return (
    <section id="devices" className="py-12 border-t border-white/6 bg-[#0b0b0c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-sm font-semibold tracking-widest text-amber-400">Compatibility</h3>
          <h2 className="mt-2 text-2xl font-extrabold text-white">Works on all your favorite devices</h2>
          <p className="mt-2 text-slate-400">Seamless apps and playback across a wide range of platforms.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {devices.map((d) => (
            <div key={d} className="flex flex-col items-center gap-3 rounded-lg border border-white/6 bg-white/2 px-4 py-6 text-center">
              <div className="h-12 w-12 rounded-md bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white">{d.split(' ')[0]}</div>
              <div className="text-sm font-semibold text-white">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
