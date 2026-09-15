import Link from "next/link";
import { Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function PortalDashboardPage() {
  const supabase = await createClient();

  const { data: assessments } = await supabase
    .from("assessments")
    .select(
      `id, curriculum, level, title, is_published,
       subjects ( name ),
       questions ( id )`,
    )
    .order("curriculum", { ascending: true })
    .order("level", { ascending: true });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-extrabold text-navy mb-1">
            Assessments
          </h1>
          <p className="text-[14px] text-muted">
            One assessment per curriculum, level and subject combination, reused
            across every student who matches it.
          </p>
        </div>
        <Link
          href="/portal/assessments/new"
          className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-[14px] font-semibold"
        >
          <Plus size={16} /> New Assessment
        </Link>
      </div>

      <div className="border border-line rounded-2xl overflow-hidden bg-white">
        <table className="w-full text-[14px]">
          <thead className="bg-bg text-left text-muted text-[12.5px] uppercase tracking-wide">
            <tr>
              <th className="px-5 py-3 font-semibold">Title</th>
              <th className="px-5 py-3 font-semibold">Curriculum</th>
              <th className="px-5 py-3 font-semibold">Level</th>
              <th className="px-5 py-3 font-semibold">Subject</th>
              <th className="px-5 py-3 font-semibold">Questions</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {(!assessments || assessments.length === 0) && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-muted">
                  No assessments yet. Create your first one.
                </td>
              </tr>
            )}
            {assessments?.map((a) => {
              const subject = a.subjects as unknown as { name: string } | null;
              const questionCount =
                (a.questions as unknown as { id: string }[])?.length ?? 0;
              return (
                <tr key={a.id} className="border-t border-line">
                  <td className="px-5 py-3.5 font-medium text-navy">
                    {a.title}
                  </td>
                  <td className="px-5 py-3.5 text-muted capitalize">
                    {a.curriculum}
                  </td>
                  <td className="px-5 py-3.5 text-muted uppercase">
                    {a.level}
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {subject?.name ?? "Unknown"}
                  </td>
                  <td className="px-5 py-3.5 text-muted">{questionCount}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[12px] font-semibold ${
                        a.is_published
                          ? "bg-teal-soft text-teal"
                          : "bg-amber-soft text-amber"
                      }`}
                    >
                      {a.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <Link
                      href={`/portal/assessments/${a.id}`}
                      className="text-blue font-semibold"
                    >
                      Manage →
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
