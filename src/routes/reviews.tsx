import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { ConsultCTA, PageHero } from "@/components/SiteLayout";
import { SALON, mapsUrl } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => seo("Reviews | NEU Be UNISEX SALON – 4.9/5 on Google", "See what customers say about NEU Be UNISEX SALON in Sector 38, Gurugram, on Google."),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Loved by Our Customers" />
      <section className="container-x pb-10">
        <div className="rounded-[2rem] border border-border bg-card px-6 py-16 text-center">
          <div className="flex justify-center text-gold-deep" aria-hidden>{[0,1,2,3,4].map((i) => <Star key={i} className="h-7 w-7 fill-current" />)}</div>
          <p className="mt-4 font-display text-8xl">{SALON.rating}<span className="text-3xl text-muted-foreground">/5</span></p>
          <p className="mt-2 text-muted-foreground">Based on {SALON.reviews} Google reviews</p>
          <p className="mx-auto mt-6 max-w-lg text-sm text-muted-foreground">We only show genuine reviews. Read every review — in customers' own words — on our Google listing.</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">Read Google Reviews</a>
        </div>
      </section>
      <ConsultCTA />
    </>
  );
}
