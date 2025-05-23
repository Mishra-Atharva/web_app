//  src/pages/users/admin/components/settings.jsx
import { useState } from "react";

export default function AdminSettings() {
  const [form, setForm] = useState({
    company: "RushLance",
    email:   "admin@rushlance.com",
    tz:      "UTC+10 (Sydney)"
  });

  const handle = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const save = () => {
    /* normally POST → /api/settings */
    console.log("saved", form);
  };

  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white max-w-[600px]">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <div className="space-y-5">

        <Field label="Company name">
          <input
            name="company"
            value={form.company}
            onChange={handle}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
        </Field>

        <Field label="Contact e-mail">
          <input
            name="email"
            value={form.email}
            onChange={handle}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
        </Field>

        <Field label="Timezone">
          <input
            name="tz"
            value={form.tz}
            onChange={handle}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
        </Field>

      </div>

      <button
        onClick={save}
        className="mt-8 px-5 py-2 rounded-lg bg-gray-800 text-white hover:opacity-90"
      >
        Save changes
      </button>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm font-medium text-gray-700 space-y-2">
      <span>{label}</span>
      {children}
    </label>
  );
}
