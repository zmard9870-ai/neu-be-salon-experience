import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MessageCircle, CalendarDays, MapPin, Star } from "lucide-react";
import { SALON, SERVICES, directionsUrl, waLink } from "@/lib/salon";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col leading-none" aria-label="NEU Be Unisex Salon home">
      <span className="font-display text-3xl font-semibold tracking-tight">NEU <em className="text-gold-deep">Be</em></span>
      <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-muted-foreground">UNISEX SALON</span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-40 border-b transition-colors ${scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"}`}>
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="border-b border-transparent py-1 text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "!border-gold !text-foreground" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={SALON.tel} aria-label="Call the salon" className="hidden h-11 w-11 items-center justify-center rounded-full border border-border hover:border-gold sm:flex"><Phone className="h-4 w-4" /></a>
          <Link to="/book" className="btn btn-primary hidden sm:inline-flex">Book Appointment</Link>
          <button className="flex h-11 w-11 items-center justify-center lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} className="block py-3 font-display text-2xl" activeProps={{ className: "text-gold-deep" }}>{n.label}</Link>
              </li>
            ))}
            <li className="pt-3"><Link to="/book" onClick={() => setOpen(false)} className="btn btn-primary w-full">Book Appointment</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pb-28 pt-16 text-primary-foreground lg:pb-10">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-3xl">NEU <em className="text-gold">Be</em></p>
          <p className="text-[0.6rem] tracking-[0.35em] opacity-70">UNISEX SALON</p>
          <p className="mt-4 text-sm opacity-75">A welcoming unisex salon in Sector 38, Gurugram, for hair, grooming, beauty and self-care.</p>
          <p className="mt-2 text-sm opacity-60" lang="hi">{SALON.hindi}</p>
        </div>
        <div>
          <h2 className="eyebrow !text-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            <li><Link to="/book" className="hover:text-gold">Book Appointment</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow !text-gold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {SERVICES.map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">{s.title}</Link></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="eyebrow !text-gold">Visit</h2>
          <address className="mt-4 not-italic opacity-80">{SALON.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address>
          <p className="mt-3 opacity-80">{SALON.hoursNote}</p>
          <p className="mt-3"><a href={SALON.tel} className="hover:text-gold">{SALON.phoneDisplay}</a></p>
          <div className="mt-3 flex gap-4">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">Directions</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-6 text-xs opacity-60 sm:flex-row">
        <p>© {new Date().getFullYear()} NEU Be UNISEX SALON. All rights reserved.</p>
        <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <a href={SALON.tel} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold"><Phone className="h-5 w-5" />Call</a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold"><MessageCircle className="h-5 w-5" />WhatsApp</a>
      <Link to="/book" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-primary text-xs font-semibold text-primary-foreground"><CalendarDays className="h-5 w-5" />Book</Link>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:p-3">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with the salon on WhatsApp" className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-sage text-primary shadow-soft transition-transform hover:scale-105 lg:flex">
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="container-x pb-10 pt-16 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function RatingBadge() {
  return (
    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm">
      <span className="flex text-gold-deep" aria-hidden>{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
      <span><strong>{SALON.rating}/5</strong> Google Rating · {SALON.reviews} Reviews</span>
    </a>
  );
}

export function ConsultCTA() {
  return (
    <section className="container-x py-20">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-16">
        <p className="eyebrow !text-gold">Not sure which service to choose?</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Talk to us — we'll help you decide.</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={SALON.tel} className="btn btn-gold"><Phone className="h-4 w-4" />Call Salon</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a>
          <Link to="/book" className="btn btn-outline"><CalendarDays className="h-4 w-4" />Book Appointment</Link>
        </div>
      </div>
    </section>
  );
}

export { MapPin };
