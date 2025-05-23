//  src/pages/users/admin/components/freelancers.jsx

import { useState } from "react";

const seed = [
  { id: 301, name: "Jane Doe",       email: "jane@designs.com", rating: 4.8, jobs: 27, status: "Active"   },
  { id: 302, name: "Tom Evans",      email: "tom@code.io",      rating: 4.2, jobs: 15, status: "Active"   },
  { id: 303, name: "Aisha Chen",     email: "aisha@dev.net",    rating: 4.9, jobs: 40, status: "Inactive" },
  { id: 304, name: "Carlos Garcia",  email: "carlos@apps.mx",   rating: 4.5, jobs: 22, status: "Active"   }
];

export default function Freelancers() {
  const [rows, setRows] = useState(seed);
  const [query, setQuery] = useState("");

  const filtered = rows.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white flex flex-col gap-8">
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Freelancers</h2>

        <input
          placeholder="Search freelancer…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="py-2 pr-4">ID</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">E-mail</th>
              <th className="py-2 pr-4">Rating</th>
              <th className="py-2 pr-4">Jobs</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4 w-[1%] whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(f => (
              <tr key={f.id} className="border-b last:border-none">
                <td className="py-3 pr-4">{f.id}</td>
                <td className="py-3 pr-4">{f.name}</td>
                <td className="py-3 pr-4 text-gray-500">{f.email}</td>
                <td className="py-3 pr-4">{f.rating}</td>
                <td className="py-3 pr-4">{f.jobs}</td>
                <td className="py-3 pr-4">{f.status}</td>
                <td className="py-3">
                  <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
