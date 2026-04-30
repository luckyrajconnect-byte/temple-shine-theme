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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2!2d75.85!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
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
