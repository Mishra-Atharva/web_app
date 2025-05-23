//  src/pages/users/admin/components/clients.jsx

import { useState } from "react";

const seed = [
  { id: 201, name: "Acme Corp",      email: "contact@acme.com",      projects: 5, status: "Active"   },
  { id: 202, name: "Globex Ltd",     email: "hello@globex.io",       projects: 2, status: "Active"   },
  { id: 203, name: "John Smith",     email: "john.smith@gmail.com",  projects: 1, status: "Inactive" },
  { id: 204, name: "Jane Johnson",   email: "jane@example.com",      projects: 3, status: "Active"   }
];

export default function Clients() {
  const [rows, setRows] = useState(seed);
  const [query, setQuery] = useState("");

  const filtered = rows.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white flex flex-col gap-8">
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Clients</h2>

        <input
          placeholder="Search client…"
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
              <th className="py-2 pr-4">Projects</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4 w-[1%] whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id} className="border-b last:border-none">
                <td className="py-3 pr-4">{c.id}</td>
                <td className="py-3 pr-4">{c.name}</td>
                <td className="py-3 pr-4 text-gray-500">{c.email}</td>
                <td className="py-3 pr-4">{c.projects}</td>
                <td className="py-3 pr-4">{c.status}</td>
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
