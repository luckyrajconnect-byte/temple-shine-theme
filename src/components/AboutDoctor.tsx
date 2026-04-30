const doctorImg = "https://i.postimg.cc/KjGSb4X3/Your-Photo-Goes-202604261213.jpg";

const qualifications = [
  "BDS (Bachelor of Dental Surgery)",
  "Affordable & High-Quality Treatment",
  "Expert in Smile Makeover & Implants",
  "Gentle & Caring Approach",
  "Child-Friendly Dentistry",
];

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-2xl shadow-primary/15 blur-overlay">
              <img
                src={doctorImg}
                alt="Dr. Deepika Lashkia with patient"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary px-5 py-3 text-primary-foreground shadow-xl shadow-primary/30">
              <div className="text-lg font-bold">10+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">About the Doctor</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Dr. Nikunj Patel</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Dr. Nikunj Patel is a dental surgeon at Just Smile Dental Care & Maxillofacial Clinic, Surat. He
              specializes in advanced dental and maxillofacial treatments, focusing on precise procedures and patient
              comfort. His approach combines modern techniques with practical treatment planning to ensure effective and
              long-lasting results.
            </p>
            <ul className="mt-6 space-y-3">
              {qualifications.map((q) => (
                <li key={q} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                    ✓
                  </span>
                  {q}
                </li>
              ))}
            </ul>
            <a
              href="#appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
            >
              Meet the Doctor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
