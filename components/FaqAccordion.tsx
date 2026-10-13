import { FAQ_ITEMS, type FaqItem } from "@/lib/faq";

export default function FaqAccordion({ items = FAQ_ITEMS }: { items?: FaqItem[] }) {
  return (
    <div className="max-w-[820px] divide-y divide-line rounded-[20px] border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-4 md:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
            {f.q}
            <span className="text-[22px] leading-none text-muted transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 mb-0 text-[15.5px] leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
