// src/pages/users/admin/components/joblistings.jsx

export default function JobListings() {
  const openJobs = [
    { id: 1, title: "Full-Stack Developer",   posted: "2025-05-28", applicants: 12 },
    { id: 2, title: "UI/UX Designer",         posted: "2025-05-25", applicants: 7  },
    { id: 3, title: "QA Automation Engineer", posted: "2025-05-20", applicants: 9  }
  ];

  const closedJobs = [
    { id: 4, title: "Technical Writer",       posted: "2025-04-10", applicants: 5  },
    { id: 5, title: "DevOps Specialist",      posted: "2025-03-18", applicants: 14 }
  ];

  return (
    <section className="rounded-2xl border border-gray-200 p-8 flex flex-col gap-8 bg-white">
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Job listings</h2>
        <button className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90">
          + New job
        </button>
      </header>

      {/* OPEN */}
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-gray-700">Open positions</h3>
        <JobsTable rows={openJobs} open />
      </div>

      {/* CLOSED */}
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-gray-700">Closed positions</h3>
        <JobsTable rows={closedJobs} />
      </div>
    </section>
  );
}

function JobsTable({ rows = [], open = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="border-b border-gray-200 text-gray-500">
          <tr>
            <th className="py-2 pr-4">Title</th>
            <th className="py-2 pr-4">Posted</th>
            <th className="py-2 pr-4">Applicants</th>
            <th className="py-2 pr-4 w-[1%] whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(j => (
            <tr key={j.id} className="border-b last:border-none">
              <td className="py-3 pr-4">{j.title}</td>
              <td className="py-3 pr-4 text-gray-500">{j.posted}</td>
              <td className="py-3 pr-4">{j.applicants}</td>
              <td className="py-3">
                {open ? (
                  <button className="px-3 py-1 rounded bg-gray-800 text-white hover:opacity-90">
                    Edit
                  </button>
                ) : (
                  <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                    View
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
