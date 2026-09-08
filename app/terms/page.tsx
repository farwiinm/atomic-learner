import PageHero from "@/components/PageHero";

export const metadata = { title: "Terms — Atomic Learner" };

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms" />
      <section className="py-16 md:py-20">
        <div className="container-page max-w-[720px] text-[15px] text-muted leading-relaxed space-y-4">
          <p>
            This page is a placeholder. Replace this content with Atomic Learner&apos;s actual
            terms of service before launch.
          </p>
        </div>
      </section>
    </main>
  );
}
