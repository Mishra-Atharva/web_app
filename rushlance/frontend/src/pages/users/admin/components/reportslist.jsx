//  src/pages/users/admin/components/reportslist.jsx

export default function ReportsList() {
  const drafts = [
    { id: 1, title: "Daily System Health",        updated: "2025-06-01 09:00" },
    { id: 2, title: "User-sign-ups (May)",        updated: "2025-06-01 08:10" },
    { id: 3, title: "Payment Gateway Errors",     updated: "2025-05-31 22:15" }
  ];

  const completed = [
    { id: 4, title: "Q1 Revenue Summary",         updated: "2025-04-02 11:30" },
    { id: 5, title: "Annual Traffic Overview",    updated: "2025-01-15 14:05" }
  ];

  return (
    <section className="rounded-2xl border border-gray-200 p-8 flex flex-col gap-8 bg-white">
      {/* header */}
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Reports</h2>
        <button className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90">
          + New report
        </button>
      </header>

      {/* DRAFTS */}
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-gray-700">Drafts</h3>
        <ReportTable rows={drafts} />
      </div>

      {/* COMPLETED */}
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-gray-700">Completed</h3>
        <ReportTable rows={completed} completed />
      </div>
    </section>
  );
}

function ReportTable({ rows = [], completed = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="border-b border-gray-200">
          <tr className="text-gray-500">
            <th className="py-2 pr-4">Title</th>
            <th className="py-2 pr-4">Last updated</th>
            <th className="py-2 pr-4 w-[1%] whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className="border-b last:border-none">
              <td className="py-3 pr-4">{r.title}</td>
              <td className="py-3 pr-4 text-gray-500">{r.updated}</td>
              <td className="py-3">
                {completed ? (
                  <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                    View
                  </button>
                ) : (
                  <button className="px-3 py-1 rounded bg-gray-800 text-white hover:opacity-90">
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
