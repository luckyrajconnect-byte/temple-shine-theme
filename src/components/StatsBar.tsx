const stats = [
  { icon: "👥", value: "5000+", label: "Happy Patients" },
  { icon: "🏅", value: "10+", label: "Years Experience" },
  { icon: "🕐", value: "24/7", label: "Emergency Care" },
  { icon: "⭐", value: "4.8★", label: "Google Rating" },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 mx-auto -mt-14 max-w-5xl px-4">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-primary/20 bg-card/90 p-4 shadow-2xl shadow-primary/15 backdrop-blur-xl md:grid-cols-4 md:p-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-card rounded-xl bg-primary/5">
            <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">{s.icon}</div>
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
