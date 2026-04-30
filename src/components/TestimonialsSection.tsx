const reviews = [
  {
    name: "Rahul Sharma",
    initial: "R",
    time: "2 weeks ago",
    text: "Best dental experience I've ever had! Dr. Deepika is incredibly gentle and professional. The clinic is very clean and modern. Highly recommend!",
  },
  {
    name: "Priya Patel",
    initial: "P",
    time: "1 month ago",
    text: "Got my teeth whitening done here and the results are amazing! The staff is very friendly and the pricing is reasonable. Will definitely come back.",
  },
  {
    name: "Amit Gupta",
    initial: "A",
    time: "3 weeks ago",
    text: "Excellent root canal treatment. I was very scared but Dr. Deepika made the entire process painless. The clinic has world-class equipment.",
  },
  {
    name: "Sneha Jain",
    initial: "S",
    time: "1 month ago",
    text: "My daughter loves visiting this clinic! The child-friendly approach is wonderful. Dr. Deepika is so patient with kids. Thank you!",
  },
  {
    name: "Vikram Singh",
    initial: "V",
    time: "2 months ago",
    text: "Got dental implants done here. The results are perfect and natural-looking. Very professional team and clean environment.",
  },
  {
    name: "Neha Verma",
    initial: "N",
    time: "1 month ago",
    text: "Amazing smile makeover! I can't stop smiling now. The entire process was smooth and the results exceeded my expectations.",
  },
];

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-6 w-6">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-section-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">What Our Patients Say</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <GoogleLogo />
            <span className="text-4xl font-bold text-primary">4.8</span>
            <div className="text-left">
              <div className="text-yellow-400">★★★★★</div>
              <div className="text-xs text-muted-foreground">200+ Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="testimonial-card">
              <div className="flex items-center justify-between mb-3">
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <GoogleLogo />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Dental+Clinic+Indore"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 flex max-w-sm items-center justify-between gap-4 rounded-lg border border-primary/20 bg-card px-5 py-4 text-left shadow-lg transition hover:-translate-y-0.5 hover:border-primary hover:shadow-xl"
        >
          <div className="flex items-center gap-3">
            <GoogleLogo />
            <div>
              <p className="text-sm font-semibold text-foreground">
                See all reviews on Google Maps
              </p>
              <p className="text-xs text-muted-foreground">Read patient feedback and ratings</p>
            </div>
          </div>
          <span className="text-lg font-bold text-primary">→</span>
        </a>
      </div>
    </section>
  );
}
