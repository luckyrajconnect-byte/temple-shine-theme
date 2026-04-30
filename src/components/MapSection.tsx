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
            title="Clinic Location"
            src="https://maps.app.goo.gl/h3gdWtw73v2rnqNJ9"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
