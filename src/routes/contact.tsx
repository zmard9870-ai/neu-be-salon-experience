import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";
import { SALON, directionsUrl, mapEmbedUrl, waLink } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact & Directions | NEU Be UNISEX SALON, Sector 38 Gurugram", "Find NEU Be UNISEX SALON on Guru Haridas Road, behind Medicity, Islampur Village, Sector 38, Gurugram. Call +91 97172 87494."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact & location" title="Come and see us." />
      <section className="container-x grid gap-8 pb-20 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 text-gold-deep" aria-hidden />
            <address className="not-italic"><strong className="block font-display text-2xl font-medium">NEU Be UNISEX SALON</strong>{SALON.addressLines.map((l) => <span key={l} className="block text-muted-foreground">{l}</span>)}</address>
          </div>
          <div className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-gold-deep" aria-hidden /><a href={SALON.tel} className="text-lg hover:text-gold-deep">{SALON.phoneDisplay}</a></div>
          <div className="flex gap-4"><Clock className="mt-1 h-5 w-5 text-gold-deep" aria-hidden /><p className="text-muted-foreground">{SALON.hoursNote}. Please call to confirm before visiting.</p></div>
          <div className="rounded-2xl bg-muted p-5 text-sm text-muted-foreground"><strong className="text-foreground">Landmarks:</strong> behind Medicity, near Pashupati Nath Pharmacy on Guru Haridas Road. For parking, please check with the salon when you call.</div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Navigation className="h-4 w-4" />Get Directions</a>
            <a href={SALON.tel} className="btn btn-outline"><Phone className="h-4 w-4" />Call Now</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a>
          </div>
          <Link to="/book" className="inline-block text-sm font-semibold underline">Or request an appointment →</Link>
        </div>
        <iframe title="Map showing NEU Be UNISEX SALON location" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[420px] w-full rounded-[2rem] border border-border" />
      </section>
    </>
  );
}
