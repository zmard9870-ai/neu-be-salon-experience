import { createFileRoute, Link } from "@tanstack/react-router";
import { ConsultCTA, PageHero } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => seo("Services | Hair, Grooming & Beauty in Sector 38 Gurugram – NEU Be", "Haircuts, hair colour, men's grooming, facials and beauty care at NEU Be UNISEX SALON, Sector 38, Gurugram."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Hair, grooming & beauty — all under one roof." intro="Our menu is being finalised with the salon. Items marked “if offered” should be confirmed by calling or messaging us. Prices and durations are shared on enquiry." />
      <section className="container-x space-y-6 pb-10">
        {SERVICES.map((s, i) => (
          <article key={s.slug} className="grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-5">
            <img src={s.image} alt="" loading="lazy" width={1024} height={1280} className={`aspect-[16/10] h-full w-full object-cover md:col-span-2 md:aspect-auto ${i % 2 ? "md:order-2" : ""}`} />
            <div className="p-7 md:col-span-3 md:p-10">
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.short}</p>
              <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                {s.items.map((it) => <li key={it} className="border-b border-border pb-2">{it}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/services/$slug" params={{ slug: s.slug }} className="btn btn-outline">Service details</Link>
                <Link to="/book" search={{ service: s.title }} className="btn btn-primary">Book This Service</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <ConsultCTA />
    </>
  );
}
