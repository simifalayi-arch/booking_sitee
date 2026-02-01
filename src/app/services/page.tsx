import Link from "next/link";

const services = [
  { id: "soft-glam", name: "Soft Glam", price: 100, duration: 60, desc: "Natural + polished. Great for birthdays and dinners." },
  { id: "full-glam", name: "Full Glam", price: 140, duration: 90, desc: "Bold, full coverage, photos-ready finish." },
  { id: "bridal", name: "Bridal Glam", price: 220, duration: 120, desc: "Long-wear bridal look + touch-up tips." },
  { id: "photoshoot", name: "Photoshoot", price: 160, duration: 90, desc: "Camera-friendly makeup for shoots and content days." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-semibold tracking-tight">Simi Glam Studio</Link>
          <nav className="flex gap-4 text-sm">
            <Link className="hover:underline" href="/services">Services</Link>
            <Link className="hover:underline" href="/book">Book</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-2 text-gray-600">Pick a service and book a time.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl border p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{s.name}</h2>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${s.price}</div>
                  <div className="text-sm text-gray-500">{s.duration} min</div>
                </div>
              </div>

              <Link
                href={`/book?service=${encodeURIComponent(s.name)}`}
                className="mt-5 inline-block rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
              >
                Book {s.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-gray-50 p-6 text-sm text-gray-700">
          <div className="font-semibold">Mobile appointments</div>
          <p className="mt-1">Travel fee may apply depending on distance.</p>
        </div>
      </section>
    </main>
  );
}
