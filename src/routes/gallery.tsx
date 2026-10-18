import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";
import { GALLERY } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery | NEU Be UNISEX SALON Gurugram", "A look at the hair, grooming and beauty experience at NEU Be UNISEX SALON in Sector 38, Gurugram."),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside the experience." intro="Illustrative images shown for now — real photos of the salon and its work will be added soon." />
      <section className="container-x columns-1 gap-5 pb-20 sm:columns-2 lg:columns-3">
        {[...GALLERY, ...GALLERY.slice(1)].map((g, i) => (
          <button key={i} onClick={() => setOpen(i % GALLERY.length)} className="mb-5 block w-full overflow-hidden rounded-2xl" aria-label={`Enlarge: ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="w-full transition-transform duration-700 hover:scale-105" />
          </button>
        ))}
      </section>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image preview" className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-card" aria-label="Close preview" autoFocus><X /></button>
          <img src={GALLERY[open].src} alt={GALLERY[open].alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </>
  );
}
