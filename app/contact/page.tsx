import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Atomic Learner" };

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        description="For general questions. To discuss your child's specific situation, booking a call is usually faster."
      />
      <section className="py-16 md:py-20">
        <div className="container-page max-w-[560px]">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
