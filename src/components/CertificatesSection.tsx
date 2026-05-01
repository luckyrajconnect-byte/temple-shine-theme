import certOdonto from "@/assets/cert-odonto.webp";
import certAward from "@/assets/cert-award.webp";
import certImplantProsth from "@/assets/cert-implant-prosthodontics.jpg";
import certClinicalMaster from "@/assets/cert-clinical-master.jpg";
import certAomsi from "@/assets/cert-aomsi.jpg";
import certMasterchef from "@/assets/cert-masterchef.jpg";
import certMentorOne from "@/assets/cert-mentor-one.jpg";
import certConference from "@/assets/cert-conference.jpg";
import certSpain from "@/assets/cert-spain.jpg";
import certHandson from "@/assets/cert-handson.jpg";
import certMentorTwo from "@/assets/cert-mentor-two.jpg";

const certificates = [
  {
    src: certAward,
    alt: "Indian Professional Awards 2020 — Emerging Head and Neck Oncosurgeon — Dr. Nikunj K. Patel",
    title: "Indian Professional Awards 2020",
    description: "Conferred with Emerging Head and Neck Oncosurgeon recognition.",
  },
  {
    src: certOdonto,
    alt: "Odonto Clear Aligners Certified Provider — Dr. Nikunj Patel",
    title: "Odonto Aligner Certified Provider",
    description: "Successfully completed the Odonto Aligner Provider Program.",
  },
  {
    src: certClinicalMaster,
    alt: "Clinical Master — Immediate Implant Placement — A Coruña, Spain 2025",
    title: "Clinical Master — Immediate Implant Placement",
    description: "Multidisciplinary Esthetic Dental Academy, A Coruña, Spain (2025).",
  },
  {
    src: certImplantProsth,
    alt: "Certificate of Attendance — Complete Implant Prosthodontics — Dr. Nikunj K. Patel",
    title: "Complete Implant Prosthodontics",
    description: "Certificate of attendance — Komal Pondkar implant program.",
  },
  {
    src: certAomsi,
    alt: "8th Gujarat State AOMSI Conference — Discovering New Horizons in OMFS",
    title: "Gujarat State AOMSI Conference",
    description: "8th Gujarat State AOMSI — Discovering New Horizons in OMFS.",
  },
  {
    src: certConference,
    alt: "International Conference on Cranial Implantology — Dr. Nikunj Patel with international faculty",
    title: "International Cranial Implantology Conference",
    description: "Participation with international faculty in advanced implantology.",
  },
  {
    src: certSpain,
    alt: "International training in Spain with Dr. Ramón Gómez Meda",
    title: "International Training — Spain",
    description: "Hands-on training with Dr. Ramón Gómez Meda (A Coruña, Spain).",
  },
  {
    src: certHandson,
    alt: "Hands-on cadaveric implant surgery training",
    title: "Hands-on Cadaveric Training",
    description: "Live hands-on implant and maxillofacial surgical training.",
  },
  {
    src: certMentorOne,
    alt: "Training with international implantology mentor at ONE Dental Clinic",
    title: "International Mentorship — ONE Dental",
    description: "Advanced clinical training with international implantology mentor.",
  },
  {
    src: certMentorTwo,
    alt: "Training session with global implantology expert",
    title: "Global Implantology Mentorship",
    description: "Continued education with renowned international implantologist.",
  },
  {
    src: certMasterchef,
    alt: "Cortical Based Implant Course group photo",
    title: "Cortical Based Implant Course",
    description: "Specialized training in cortical based implant techniques.",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-xl shadow-primary/10"
            >
              <div className="flex items-center justify-center bg-background p-4">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-72 w-full object-contain"
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
