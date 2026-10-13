export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="py-14 md:py-16 border-b border-line">
      <div className="container-page max-w-[720px]">
        {eyebrow && (
          <div className="text-[13.5px] font-semibold text-blue mb-3">{eyebrow}</div>
        )}
        <h1 className="text-[30px] md:text-[42px] font-extrabold text-navy leading-tight mb-4">
          {title}
        </h1>
        {description && <p className="text-[16.5px] text-muted max-w-[560px]">{description}</p>}
      </div>
    </div>
  );
}
