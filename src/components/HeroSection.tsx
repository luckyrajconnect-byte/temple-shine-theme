import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Modern dental clinic interior"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-28 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold shadow-lg shadow-gold/10 backdrop-blur-md animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            BEST Dental Care in Surat
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] text-primary-foreground drop-shadow-xl md:text-7xl lg:text-8xl animate-fade-in-up">
            Your Smile,
            <br />
            <span className="text-primary-foreground">Our </span>
            <span className="text-gradient-gold">Priority</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg animate-fade-in-up-delay">
            Pain-free treatment aur quick appointments ab better smile ke liye wait karne ki zarurat nahi
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up-delay-2">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/35 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span>📅</span> Book Appointment
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/60 bg-primary-foreground/10 px-7 py-4 text-base font-bold text-primary-foreground backdrop-blur-md transition-all hover:border-primary-foreground hover:bg-primary-foreground/20"
            >
              <span>📞</span> Call Now
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-primary-foreground/75 animate-fade-in-up-delay-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Quick appointments available today
          </p>
        </div>
      </div>
    </section>
  );
}
