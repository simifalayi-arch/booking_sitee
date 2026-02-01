import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">Simi Glam Studio</div>
          <nav className="flex gap-4 text-sm">
            <Link className="hover:underline" href="/services">Services</Link>
            <Link className="hover:underline" href="/book">Book</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              Makeup that fits your moment.
            </h1>
            <p className="mt-4 text-gray-600">
              Soft glam, full glam, bridal, and photoshoots. Choose a service and request a time.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/book"
                className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="rounded-xl border px-5 py-3 hover:bg-gray-50"
              >
                View Services
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <div className="font-semibold">In-studio</div>
                <div className="text-gray-600">Calm + clean</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Mobile</div>
                <div className="text-gray-600">Travel available</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Events</div>
                <div className="text-gray-600">Photo-ready</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-8">
            <h2 className="text-xl font-semibold">Popular services</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center justify-between rounded-xl bg-white p-4">
                <span>Soft Glam</span>
                <span className="text-sm text-gray-500">60 min</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white p-4">
                <span>Full Glam</span>
                <span className="text-sm text-gray-500">90 min</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white p-4">
                <span>Bridal Glam</span>
                <span className="text-sm text-gray-500">120 min</span>
              </li>
            </ul>

            <Link
              href="/book"
              className="mt-6 inline-block w-full rounded-xl bg-black px-5 py-3 text-center text-white hover:opacity-90"
            >
              Start booking
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
