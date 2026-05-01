import drNikunj from "@/assets/dr-nikunj.webp";

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
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">About the Doctor</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Dr. Nikunj Patel</h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-xl shadow-primary/10">
              <img
                src={drNikunj}
                alt="Dr. Nikunj Patel at Just Smile Dental Care & Maxillofacial Clinic, Surat"
                className="h-auto w-full max-w-sm object-cover"
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div>
            <p className="leading-relaxed text-muted-foreground">
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
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
