export default function MapSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Find Us</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Visit Our Clinic</h2>
          <p className="mt-3 text-muted-foreground">
            Uma Plaza, Near Madhuram Circle, Kharvasa–Dindoli Road, Dindoli, Surat – 394210
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Just Smile Dental Care & Maxillofacial Clinic Location"
            src="https://maps.google.com/maps?q=Just%20Smile%20Dental%20Care%20and%20Maxillofacial%20Clinic%2C%20Uma%20Plaza%2C%20Dindoli%2C%20Surat&ll=21.142827,72.8810645&z=16&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://maps.app.goo.gl/casxzBJEWWsGmtFm8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
