//  src/pages/users/admin/components/help.jsx
import { useState } from "react";

const faqs = [
  {
    q: "How do I create a new report?",
    a: "Go to Reports → “+ New report”, choose a template, then click Save."
  },
  {
    q: "How do I deactivate a user?",
    a: "Open the user’s profile, click the Status dropdown and select Inactive."
  },
  {
    q: "Where can I change billing details?",
    a: "Settings → Payment → Edit billing information."
  }
];

export default function AdminHelp() {
  const [open, setOpen] = useState(null);

  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white flex flex-col gap-8 max-w-[700px]">
      <h2 className="text-xl font-semibold">Admin Help Center</h2>

      {/* FAQ */}
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <article key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-medium flex justify-between items-center"
            >
              {f.q}
              <span className="text-gray-500">{open === i ? "–" : "+"}</span>
            </button>
            {open === i && <p className="mt-2 text-sm text-gray-700">{f.a}</p>}
          </article>
        ))}
      </div>

      {/* Contact */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-medium mb-3">Contact support</h3>
        <p className="text-sm text-gray-700 mb-4">
          Can’t find what you need? Reach out and we’ll get back to you within one
          business day.
        </p>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert("Ticket submitted");
          }}
          className="space-y-4"
        >
          <input
            required
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
          />
          <textarea
            required
            rows="4"
            placeholder="Describe your issue…"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90"
          >
            Submit ticket
          </button>
        </form>
      </div>
    </section>
  );
}
