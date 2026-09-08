import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata = {
  title: "Book a Parent–Teacher Call — Atomic Learner",
};

export default function BookPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-page max-w-[720px] mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-[30px] md:text-[40px] font-extrabold text-navy leading-tight mb-4">
            Book a Parent–Teacher Call
          </h1>
          <p className="text-[16.5px] text-muted max-w-[520px] mx-auto">
            A short, no-commitment conversation to discuss your child&apos;s situation, goals,
            subject and level, and the right next step. Nothing is charged before this call.
          </p>
        </div>
        <CalendlyEmbed />
      </div>
    </main>
  );
}
