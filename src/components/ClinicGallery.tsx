import clinicRoom from "@/assets/clinic-room.jpg";
import clinicLobby from "@/assets/clinic-lobby.jpg";
import clinicHall from "@/assets/clinic-hall.jpg";
import clinicSterilization from "@/assets/clinic-sterilization.jpg";

const images = [
  {
    src: clinicRoom,
    alt: "Dental treatment room",
    placeholder: "",
  },
  {
    src: clinicLobby,
    alt: "Clinic waiting area",
    placeholder: "",
  },
  {
    src: clinicHall,
    alt: "Clinic treatment hall",
    placeholder: "",
  },
  {
    src: clinicSterilization,
    alt: "Sterilization room",
    placeholder: "",
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-card group overflow-hidden rounded-xl border border-primary/20 shadow-xl shadow-primary/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-72 w-full object-cover clinic-blur-soft"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/25 p-4">
                <p className="text-center text-base font-semibold text-primary-foreground drop-shadow-lg">
                  {img.placeholder}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
