import rootCanalImage from "@/assets/service-root-canal-visual.webp";
import whiteningImage from "@/assets/service-teeth-whitening-visual.webp";
import implantsImage from "@/assets/service-dental-implants-visual.webp";
import alignersImage from "@/assets/service-braces-aligners-visual.webp";
import smileMakeoverImage from "@/assets/service-smile-makeover-visual.webp";
import generalDentistryImage from "@/assets/service-general-dentistry-visual.webp";
import kidsDentistryImage from "@/assets/service-kids-dentistry-visual.webp";
import emergencyDentalImage from "@/assets/service-emergency-dental-visual.webp";

const services = [
  {
    image: rootCanalImage,
    title: "Root Canal Treatment",
    desc: "Painless root canal procedures with advanced technology to save your natural teeth.",
  },
  {
    image: whiteningImage,
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter, more confident smile.",
  },
  {
    image: implantsImage,
    title: "Dental Implants",
    desc: "Permanent tooth replacement solutions that look and feel like natural teeth.",
  },
  {
    image: alignersImage,
    title: "Braces & Aligners",
    desc: "Orthodontic treatments including metal braces and invisible aligners.",
  },
  {
    image: smileMakeoverImage,
    title: "Smile Makeover",
    desc: "Complete smile transformation with veneers, bonding, and cosmetic dentistry.",
  },
  {
    image: generalDentistryImage,
    title: "General Dentistry",
    desc: "Routine check-ups, cleanings, fillings, and preventive dental care.",
  },
  {
    image: kidsDentistryImage,
    title: "Kids Dentistry",
    desc: "Gentle dental care for children with a friendly and comfortable approach.",
  },
  {
    image: emergencyDentalImage,
    title: "Emergency Dental Care",
    desc: "Quick support for tooth pain, swelling, broken teeth, and urgent dental needs.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
            Our Services
          </p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We offer a wide range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="service-card overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.title} service visual`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width="640"
                  height="480"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
