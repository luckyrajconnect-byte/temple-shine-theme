import clinicRoom from "@/assets/clinic-room-real.webp";
import clinicReception from "@/assets/clinic-reception-real.webp";

const images = [
  {
    src: clinicRoom,
    alt: "Modern dental treatment room with dental chair",
  },
  {
    src: clinicReception,
    alt: "Clinic reception and waiting area",
  },
];

export default function ClinicGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Our Clinic</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">State-of-the-Art Facility</h2>
          <p className="mt-3 text-muted-foreground">
            Take a look at our modern, hygienic, and comfortable dental clinic
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-card group overflow-hidden rounded-xl border border-primary/20 shadow-xl shadow-primary/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-72 w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
