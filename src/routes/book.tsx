import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";
import { SALON, SERVICES, waLink } from "@/lib/salon";
import { bookingMessage, bookingSchema } from "@/lib/booking";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/book")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () => seo("Book an Appointment | NEU Be UNISEX SALON Gurugram", "Request an appointment at NEU Be UNISEX SALON, Sector 38, Gurugram, via WhatsApp or phone."),
  component: Book,
});

type Errors = Partial<Record<string, string>>;

function Book() {
  const { service } = Route.useSearch();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "opened">("idle");
  const today = new Date().toISOString().slice(0, 10);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = bookingSchema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] ??= i.message));
      setErrors(errs);
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    window.open(waLink(bookingMessage(r.data)), "_blank", "noopener");
    setTimeout(() => setStatus("opened"), 800);
  };

  const F = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      {children}
      {errors[id] && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-destructive">{errors[id]}</p>}
    </div>
  );
  const aria = (id: string) => ({ id, name: id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined, className: "field" });

  return (
    <>
      <PageHero eyebrow="Appointments" title="Request an appointment." intro="Fill in your preferences and we'll prepare a WhatsApp message for you to send to the salon. The salon will reply to confirm availability — your appointment is not booked until they confirm." />
      <section className="container-x grid gap-10 pb-20 lg:grid-cols-3">
        <form onSubmit={submit} noValidate className="grid gap-5 rounded-[2rem] border border-border bg-card p-6 sm:grid-cols-2 md:p-10 lg:col-span-2">
          <F id="name" label="Full name *"><input {...aria("name")} autoComplete="name" /></F>
          <F id="phone" label="Mobile number *"><input {...aria("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="98XXXXXXXX" /></F>
          <div className="sm:col-span-2">
            <F id="service" label="Preferred service *">
              <select {...aria("service")} defaultValue={service ?? ""}>
                <option value="" disabled>Choose a service</option>
                {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                <option>Not sure — need advice</option>
              </select>
            </F>
          </div>
          <F id="date" label="Preferred date *"><input {...aria("date")} type="date" min={today} /></F>
          <F id="time" label="Preferred time *"><input {...aria("time")} type="time" /></F>
          <div className="sm:col-span-2"><F id="message" label="Message (optional)"><textarea {...aria("message")} rows={4} maxLength={500} /></F></div>
          <div className="sm:col-span-2">
            <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
              <MessageCircle className="h-4 w-4" />{status === "sending" ? "Opening WhatsApp…" : "Request Appointment"}
            </button>
            {status === "opened" && (
              <p role="status" className="mt-4 rounded-xl bg-muted p-4 text-sm">
                WhatsApp should now be open with your request. Please press <strong>send</strong> there — the salon will reply to confirm. If it didn't open, call us on <a href={SALON.tel} className="underline">{SALON.phoneDisplay}</a>.
              </p>
            )}
          </div>
        </form>
        <aside className="space-y-4">
          <h2 className="text-3xl">Prefer to talk?</h2>
          <p className="text-muted-foreground">{SALON.hoursNote}.</p>
          <a href={SALON.tel} className="btn btn-outline w-full"><Phone className="h-4 w-4" />Call Salon</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a>
        </aside>
      </section>
    </>
  );
}
