const reasons = [
  {
    icon: "🛡️",
    title: "Strict Hygiene Standards",
    desc: "Every instrument is sterilized carefully so your treatment stays safe and worry-free.",
  },
  {
    icon: "💉",
    title: "Painless Treatment Focus",
    desc: "Gentle care, modern techniques, and a calm experience for every patient.",
  },
  {
    icon: "🔬",
    title: "Advanced Dental Technology",
    desc: "Digital diagnosis and precise treatment planning for better long-term results.",
  },
  {
    icon: "🤝",
    title: "Transparent Consultation",
    desc: "Clear guidance, honest treatment options, and no confusing dental decisions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Dental Care You Can Trust
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We focus on safe, comfortable, and result-driven care for every smile.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="service-card text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-2xl shadow-inner">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
