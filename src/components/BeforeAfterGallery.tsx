import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import baSmileMakeover from "@/assets/ba-smile-makeover.jpg";
import baOrthodontic from "@/assets/ba-orthodontic-real.jpg";
import baVeneers from "@/assets/ba-veneers-real.jpg";
import baWhitening from "@/assets/ba-whitening-real.jpg";
import baBonding from "@/assets/ba-bonding-real.jpg";

const items = [
  { img: baSmileMakeover, label: "Smile Makeover" },
  { img: baOrthodontic, label: "Orthodontic Treatment" },
  { img: baVeneers, label: "Dental Veneers" },
  { img: baWhitening, label: "Teeth Whitening" },
  { img: baBonding, label: "Dental Bonding" },
];

export default function BeforeAfterGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section id="results" className="py-20 bg-section-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Results</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Before &amp; After Transformations
          </h2>
          <p className="mt-3 text-muted-foreground">Real results from our happy patients</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3 first:pl-0 sm:first:pl-4"
                >
                  <div className="ba-card group flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-card shadow-xl shadow-primary/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    <div
                      className="w-full overflow-hidden bg-muted flex items-center justify-center"
                      style={{ aspectRatio: "4 / 3" }}
                    >
                      <img
                        src={item.img}
                        alt={`${item.label} before and after`}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={i === 0 ? "high" : "low"}
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="p-4 border-t border-border">
                      <h3 className="text-base font-semibold text-foreground text-center">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 shadow-lg border border-border hover:bg-background transition disabled:opacity-40"
            disabled={!canPrev}
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 shadow-lg border border-border hover:bg-background transition disabled:opacity-40"
            disabled={!canNext}
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
