import { useState } from "react";

const serviceOptions = [
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Implants",
  "Braces / Aligners",
  "Smile Makeover",
  "General Dentistry",
  "Other",
];

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nMessage: ${form.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="appointment" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Book Now</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Schedule Your Visit</h2>
            <p className="mt-4 text-muted-foreground">
              Book your appointment easily via WhatsApp. Fill in the form and we'll confirm your slot within minutes!
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-primary/15 bg-card/90 p-4 shadow-lg shadow-primary/10">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp Direct</div>
                  <div className="text-sm text-muted-foreground">Quick response within 5 minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card/80 p-4">
                <span className="text-lg">📍</span>
                <span className="text-sm text-muted-foreground">
                  Uma plaza, 127, Kharvasa - Dindoli Rd, near madhuram circal, Dindoli, Surat, Karadva, Gujarat 394210,
                  India
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card/80 p-4">
                <span className="text-lg">🕐</span>
                <span className="text-sm text-muted-foreground">
                  Mon – Wed & Sat: 10:00 AM – 8:00 PM · Thu – Fri: 10:00 AM – 8:00 PM
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-primary/20 bg-card/95 p-6 shadow-2xl shadow-primary/15 backdrop-blur-xl"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Phone Number *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Service *</label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Preferred Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
