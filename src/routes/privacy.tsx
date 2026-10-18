import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import { SALON } from "@/lib/salon";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy | NEU Be UNISEX SALON", "How NEU Be UNISEX SALON handles the details you share when enquiring about appointments."),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-x max-w-3xl space-y-5 pb-20 text-muted-foreground">
        <p>This website does not store the details you enter in the appointment form. When you press “Request Appointment”, your details are placed into a WhatsApp message on your own device, which you choose whether to send to the salon.</p>
        <p>If you send that message, the salon receives your name, mobile number and preferences through WhatsApp and uses them only to reply to your enquiry and arrange your appointment. WhatsApp's own privacy policy applies to messages sent through it.</p>
        <p>The contact page shows an embedded Google Map, which is provided by Google and subject to Google's privacy policy.</p>
        <p>We do not use analytics or advertising cookies at this time. If that changes, this page will be updated.</p>
        <p>Questions? Call us on <a href={SALON.tel} className="underline">{SALON.phoneDisplay}</a>.</p>
      </section>
    </>
  );
}
