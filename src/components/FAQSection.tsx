import { useState } from "react";

const faqs = [
  {
    q: "Is the treatment pain-free?",
    a: "Yes, we use the latest anesthesia techniques and modern equipment to ensure all procedures are virtually pain-free. Your comfort is our priority.",
  },
  {
    q: "Is the root canal treatment painful?",
    a: "Not at all! With modern anesthesia and advanced equipment, root canal treatments are comfortable and pain-free. Most patients don't feel any pain during the procedure.",
  },
  {
    q: "How much does teeth whitening cost?",
    a: "Teeth whitening costs vary depending on the treatment type. We offer competitive pricing and can discuss options during your consultation. Contact us for a detailed quote.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care and maintenance, dental implants can last a lifetime. They are the most durable and long-lasting tooth replacement option available.",
  },
  {
    q: "Do you treat children?",
    a: "Yes! We specialize in child-friendly dentistry. Our gentle approach makes dental visits comfortable and enjoyable for children of all ages.",
  },
  {
    q: "What are your clinic timings?",
    a: "We are open Monday to Saturday, 10:00 AM to 8:00 PM. We also provide 24/7 emergency dental care.",
  },
  {
    q: "Do you offer EMI or payment plans?",
    a: "Yes, we offer flexible payment options including EMI plans to make dental care accessible and affordable for everyone.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-section-bg">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-primary/15 bg-card/90 shadow-lg shadow-primary/5">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="border-t border-border px-4 pb-4 pt-2 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
