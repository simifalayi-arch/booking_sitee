"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const serviceOptions = ["Soft Glam", "Full Glam", "Bridal Glam", "Photoshoot"];

function timeSlots() {
  const slots: string[] = [];
  for (let h = 9; h <= 18; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 18 && m > 0) continue;
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

export default function BookPage() {
  const params = useSearchParams();
  const prefill = params.get("service") ?? "";

  const slots = useMemo(() => timeSlots(), []);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    service: serviceOptions.includes(prefill) ? prefill : "",
    date: "",
    time: "",
    fullName: "",
    email: "",
    phone: "",
    locationType: "in-studio",
    address: "",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Booking request:", form);
    setSent(true);
  }

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

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Book an appointment</h1>
        <p className="mt-2 text-gray-600">Submit your request and we’ll confirm availability.</p>

        {sent ? (
          <div className="mt-8 rounded-2xl border bg-green-50 p-6">
            <div className="text-lg font-semibold">Request received ✅</div>
            <p className="mt-2 text-gray-700">
              I’ll confirm your appointment and reply to <span className="font-medium">{form.email}</span>.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                className="rounded-xl border px-5 py-3 hover:bg-white"
                onClick={() => setSent(false)}
              >
                Make another booking
              </button>
              <Link className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90" href="/services">
                Back to services
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Service</span>
                <select
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">Appointment type</span>
                <select
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.locationType}
                  onChange={(e) => update("locationType", e.target.value)}
                >
                  <option value="in-studio">In-studio</option>
                  <option value="mobile">Mobile (travel to you)</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium">Date</span>
                <input
                  type="date"
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Time</span>
                <select
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  required
                >
                  <option value="" disabled>Select a time</option>
                  {slots.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
            </div>

            {form.locationType === "mobile" && (
              <label className="block">
                <span className="text-sm font-medium">Address</span>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  placeholder="Street, City, State"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  required
                />
              </label>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Phone (optional)</span>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Notes (optional)</span>
                <input
                  className="mt-1 w-full rounded-xl border p-3"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Inspo, allergies, skin type..."
                />
              </label>
            </div>

            <button className="w-full rounded-xl bg-black px-5 py-3 text-white hover:opacity-90" type="submit">
              Submit booking request
            </button>

            <p className="text-xs text-gray-500">
              Next step: we’ll save requests to a database and send confirmations automatically.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
