export default function SectionConnector({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="relative py-10 md:py-14">
      <div className="container-page flex items-center gap-5 max-w-[720px] mx-auto">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-teal" />
          <div className="w-px h-10 md:h-14 bg-line" />
        </div>
        <p className="text-[15px] md:text-[16px] text-muted leading-relaxed">
          <span className="text-navy font-semibold">{label}</span> — {text}
        </p>
      </div>
    </div>
  );
}
