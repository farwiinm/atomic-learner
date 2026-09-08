import PageHero from "@/components/PageHero";

export const metadata = { title: "Privacy Policy — Atomic Learner" };

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" />
      <section className="py-16 md:py-20">
        <div className="container-page max-w-[720px] prose-sm text-[15px] text-muted leading-relaxed space-y-4">
          <p>
            This page is a placeholder. Replace this content with Atomic Learner&apos;s actual
            privacy policy before launch, covering what information is collected (e.g. through
            enquiry forms, diagnostic assessments and Calendly bookings), how it is stored (via
            Supabase), and how parents or students can request access to or deletion of their
            data.
          </p>
        </div>
      </section>
    </main>
  );
}
