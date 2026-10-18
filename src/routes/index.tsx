import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Scissors, Sparkles, Star, Users } from "lucide-react";
import { ConsultCTA, RatingBadge } from "@/components/SiteLayout";
import { SALON, SERVICES, images } from "@/lib/salon";
import { seo } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: SALON.name,
  alternateName: SALON.hindi,
  telephone: "+919717287494",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 11–12, Guru Haridas Road, behind Medicity, near Pashupati Nath Pharmacy, Islampur Village, Sector 38",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "NEU Be UNISEX SALON | Unisex Salon in Sector 38, Gurugram",
      "Discover hair styling, grooming and beauty services at NEU Be UNISEX SALON in Sector 38, Gurugram. Contact us to enquire about services and appointments.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="container-x grid items-center gap-10 pb-16 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">Your neighbourhood beauty destination</p>
          <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl xl:text-7xl">
            Your Style. <em className="text-gold-deep">Your Confidence.</em> Your Salon.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Discover hair styling, grooming, beauty, and self-care services in a welcoming space designed for you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/book" className="btn btn-primary">Book Your Appointment</Link>
            <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-muted-foreground">
            <RatingBadge />
            <span className="inline-flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" />Sector 38, Gurugram</span>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <img src={images.hero} alt="Warmly lit salon with round gold mirrors and styling chairs" width={1600} height={1104} className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" fetchPriority="high" />
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-card px-6 py-4 shadow-soft sm:block">
            <p className="font-display text-4xl">{SALON.rating}<span className="text-xl text-muted-foreground">/5</span></p>
            <p className="text-xs text-muted-foreground">{SALON.reviews} Google reviews</p>
          </div>
        </div>
      </section>

      <section aria-label="Why customers choose us" className="border-y border-border bg-card">
        <ul className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { i: Star, t: "4.9/5 Google rating", d: "586 reviews" },
            { i: Users, t: "Unisex salon", d: "For men and women" },
            { i: MapPin, t: "Sector 38", d: "Near Medicity" },
            { i: Scissors, t: "Hair & beauty", d: "Grooming to skincare" },
          ].map(({ i: I, t, d }) => (
            <li key={t} className="flex items-center gap-3">
              <I className="h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
              <div><p className="text-sm font-semibold">{t}</p><p className="text-xs text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our services</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Care for every look.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold-deep">View all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-soft">
              <div className="overflow-hidden"><img src={s.image} alt="" loading="lazy" width={1024} height={1280} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">Discover <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <img src={images.men} alt="Barber trimming a client's beard" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
          <div>
            <p className="eyebrow">About the salon</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Good Hair Days Start Here.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At NEU Be UNISEX SALON, we believe personal care should feel welcoming, comfortable, and tailored to you. Whether you are refreshing your haircut, exploring a new style, or making time for self-care, our aim is to help you feel confident and well cared for.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Personalised consultations before every service", "A comfortable space for everyone", "Easy to find in Islampur Village, Sector 38"].map((t) => (
                <li key={t} className="flex gap-3"><Sparkles className="h-4 w-4 shrink-0 text-gold-deep" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary mt-8">More about us</Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center md:py-28">
        <p className="eyebrow">Loved by our customers</p>
        <p className="mt-4 font-display text-7xl md:text-8xl">{SALON.rating}<span className="text-3xl text-muted-foreground">/5</span></p>
        <p className="mt-2 text-muted-foreground">from {SALON.reviews} Google reviews</p>
        <Link to="/reviews" className="btn btn-outline mt-8">Read Google Reviews</Link>
      </section>

      <ConsultCTA />
    </>
  );
}
