import { PRICES, SESSION_LENGTH, lkr } from "@/lib/site";

export default function PriceTable({ dark = false }: { dark?: boolean }) {
  const wrap = dark ? "bg-navy text-white" : "bg-white border border-line text-navy";
  const head = dark ? "text-white/70" : "text-muted";
  const rule = dark ? "border-white/15" : "border-line";
  return (
    <div className={`rounded-[22px] p-5 md:p-6 ${wrap}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="text-[16px] font-bold">Fees per session</div>
        <span className="text-[12.5px] font-bold bg-teal/15 text-teal px-3 py-1 rounded-full">Free trial class</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[15px]">
          <thead>
            <tr className={`text-[12.5px] font-semibold ${head}`}>
              <th className="pb-2 pr-3 font-semibold">Grades</th>
              <th className="pb-2 pr-3 font-semibold">Online ({SESSION_LENGTH.online})</th>
              <th className="pb-2 font-semibold">In person ({SESSION_LENGTH.inPerson})</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.grades} className={`border-t ${rule}`}>
                <td className="py-3 pr-3 font-semibold">{p.grades}</td>
                <td className="py-3 pr-3">{lkr(p.online)}</td>
                <td className="py-3">{lkr(p.inPerson)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`text-[13px] mt-3 mb-0 ${head}`}>Prices are per session, for one student.</p>
    </div>
  );
}
