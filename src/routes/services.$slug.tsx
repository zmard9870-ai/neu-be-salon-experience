import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ConsultCTA } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(`${loaderData.service.title} in Sector 38, Gurugram | NEU Be UNISEX SALON`, loaderData.service.description)
      : { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] },
  component: Detail,
});

function Detail() {
  const { service: s } = Route.useLoaderData();
  const others = SERVICES.filter((o) => o.slug !== s.slug).slice(0, 3);
  return (
    <>
      <section className="container-x grid gap-12 pb-16 pt-12 lg:grid-cols-2 lg:pt-20">
        <div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">← All services</Link>
          <p className="eyebrow mt-8">Service</p>
          <h1 className="mt-3 text-5xl md:text-7xl">{s.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{s.description}</p>
          <h2 className="mt-10 text-2xl">Who it may suit</h2>
          <p className="mt-2 text-muted-foreground">{s.suits}</p>
          <h2 className="mt-8 text-2xl">What the appointment generally involves</h2>
          <ul className="mt-3 space-y-2">{s.involves.map((x) => <li key={x} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 text-gold-deep" aria-hidden />{x}</li>)}</ul>
          <h2 className="mt-8 text-2xl">Included in this category</h2>
          <ul className="mt-3 space-y-1 text-muted-foreground">{s.items.map((x) => <li key={x}>· {x}</li>)}</ul>
          <p className="mt-8 rounded-2xl bg-muted p-4 text-sm text-muted-foreground">Price and duration: please enquire — these depend on hair length, condition and the exact service. Results vary from person to person.</p>
          <Link to="/book" search={{ service: s.title }} className="btn btn-primary mt-8">Book This Service</Link>
        </div>
        <img src={s.image} alt={`${s.title} at the salon`} width={1024} height={1280} className="aspect-[4/5] w-full rounded-[2rem] object-cover lg:sticky lg:top-28" />
      </section>
      <section className="container-x pb-6">
        <h2 className="text-3xl">Explore other services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="rounded-2xl border border-border bg-card p-6 hover:border-gold">
              <h3 className="text-2xl">{o.title}</h3><p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <ConsultCTA />
    </>
  );
}
