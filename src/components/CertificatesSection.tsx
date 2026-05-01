import certOdonto from "@/assets/cert-odonto.webp";
import certAward from "@/assets/cert-award.webp";

const certificates = [
  {
    src: certOdonto,
    alt: "Odonto Clear Aligners Certified Provider — Dr. Nikunj Patel",
    title: "Odonto Aligner Certified Provider",
    description: "Successfully completed the Odonto Aligner Provider Program.",
  },
  {
    src: certAward,
    alt: "Indian Professional Awards 2020 — Emerging Head and Neck Oncosurgeon — Dr. Nikunj K. Patel",
    title: "Indian Professional Awards 2020",
    description: "Certificate of Recognition — Emerging Head and Neck Oncosurgeon.",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-section-bg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Credentials</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Certifications & Awards</h2>
          <p className="mt-3 text-muted-foreground">
            Recognized expertise and professional certifications of Dr. Nikunj Patel
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-xl shadow-primary/10"
            >
              <div className="flex items-center justify-center bg-background p-4">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-80 w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
