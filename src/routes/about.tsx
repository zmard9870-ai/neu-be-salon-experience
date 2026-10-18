import { createFileRoute } from "@tanstack/react-router";
import { ConsultCTA, PageHero } from "@/components/SiteLayout";
import { images } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About | NEU Be UNISEX SALON, Sector 38 Gurugram", "A welcoming unisex salon in Islampur Village, Sector 38, Gurugram, offering personalised hair, grooming and beauty care."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About the salon" title="Good Hair Days Start Here." intro="At NEU Be UNISEX SALON, we believe personal care should feel welcoming, comfortable, and tailored to you. Whether you are refreshing your haircut, exploring a new style, or making time for self-care, our aim is to help you feel confident and well cared for." />
      <section className="container-x">
        <img src={images.hero} alt="Salon interior with styling stations" loading="lazy" width={1600} height={1104} className="aspect-[16/8] w-full rounded-[2rem] object-cover" />
      </section>
      <section className="container-x grid gap-10 py-20 md:grid-cols-3">
        {[
          { t: "Personalised consultations", d: "Every visit begins with a conversation about your hair or skin, your routine and the look you want." },
          { t: "Welcoming for everyone", d: "A unisex salon where men and women can enjoy grooming and beauty services in one comfortable space." },
          { t: "In your neighbourhood", d: "Located behind Medicity in Islampur Village, Sector 38 — convenient for residents and professionals nearby." },
        ].map((x) => (
          <div key={x.t} className="border-t border-gold pt-6"><h2 className="text-3xl">{x.t}</h2><p className="mt-3 text-muted-foreground">{x.d}</p></div>
        ))}
      </section>
      <ConsultCTA />
    </>
  );
}
