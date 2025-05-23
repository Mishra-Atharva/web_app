//  src/pages/users/admin/components/bookings.jsx

export default function Bookings() {
  const upcoming = [
    { id: 101, client: "John Smith",      service: "Website Audit",   date: "2025-06-05 10:00", status: "Confirmed" },
    { id: 102, client: "Acme Corp",       service: "Pen-test",        date: "2025-06-06 14:00", status: "Pending"   }
  ];

  const past = [
    { id:  95, client: "Jane Doe",        service: "UI Review",       date: "2025-05-28 09:00", status: "Completed" },
    { id:  93, client: "Globex",          service: "Code Audit",      date: "2025-05-20 16:00", status: "Completed" }
  ];

  return (
    <section className="rounded-2xl border border-gray-200 p-8 flex flex-col gap-8 bg-white">
      <h2 className="text-xl font-semibold">All bookings</h2>

      <Table title="Upcoming" rows={upcoming} />

      <Table title="Past" rows={past} past />
    </section>
  );
}

function Table({ title, rows, past = false }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium text-gray-700">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="py-2 pr-4">ID</th>
              <th className="py-2 pr-4">Client</th>
              <th className="py-2 pr-4">Service</th>
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4 w-[1%] whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(b => (
              <tr key={b.id} className="border-b last:border-none">
                <td className="py-3 pr-4">{b.id}</td>
                <td className="py-3 pr-4">{b.client}</td>
                <td className="py-3 pr-4">{b.service}</td>
                <td className="py-3 pr-4 text-gray-500">{b.date}</td>
                <td className="py-3 pr-4">{b.status}</td>
                <td className="py-3">
                  {past ? (
                    <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                      View
                    </button>
                  ) : (
                    <button className="px-3 py-1 rounded bg-gray-800 text-white hover:opacity-90">
                      Manage
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
