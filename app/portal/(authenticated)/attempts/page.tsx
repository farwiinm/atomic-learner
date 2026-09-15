import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function PortalAttemptsPage() {
  const supabase = await createClient();

  const { data: attempts } = await supabase
    .from("assessment_attempts")
    .select(
      `id, status, contact_email, submitted_at, created_at,
       assessments ( title, curriculum, level, subjects ( name ) )`,
    )
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[24px] font-extrabold text-navy mb-1">
          Diagnostic Attempts
        </h1>
        <p className="text-[14px] text-muted">
          Every attempt started across all assessments, most recent first.
        </p>
      </div>

      <div className="border border-line rounded-2xl overflow-hidden bg-white">
        <table className="w-full text-[14px]">
          <thead className="bg-bg text-left text-muted text-[12.5px] uppercase tracking-wide">
            <tr>
              <th className="px-5 py-3 font-semibold">Assessment</th>
              <th className="px-5 py-3 font-semibold">Contact</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Submitted</th>
              <th className="px-5 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {(!attempts || attempts.length === 0) && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-muted">
                  No attempts yet.
                </td>
              </tr>
            )}
            {attempts?.map((a) => {
              const meta = a.assessments as unknown as {
                title: string;
                curriculum: string;
                level: string;
                subjects: { name: string };
              } | null;
              return (
                <tr key={a.id} className="border-t border-line">
                  <td className="px-5 py-3.5">
                    {meta?.title ?? "Not available"}
                    <div className="text-[12px] text-muted">
                      {meta?.curriculum?.toUpperCase()} ·{" "}
                      {meta?.level?.toUpperCase()}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {a.contact_email ?? "Not provided"}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[12px] font-semibold ${
                        a.status === "submitted"
                          ? "bg-amber-soft text-amber"
                          : a.status === "reviewed"
                            ? "bg-teal-soft text-teal"
                            : "bg-blue-soft text-blue"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {a.submitted_at
                      ? new Date(a.submitted_at).toLocaleDateString()
                      : "Not yet"}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <Link
                      href={`/portal/attempts/${a.id}`}
                      className="text-blue font-semibold"
                    >
                      Review →
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
