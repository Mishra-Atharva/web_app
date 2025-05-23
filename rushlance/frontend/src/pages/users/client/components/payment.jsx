//  payment-method form
import { useState } from "react";

export default function PaymentMethod() {
  const [form, setForm] = useState({
    name: "Jane Client",
    number: "4242 4242 4242 4242",
    exp: "12/27",
    cvc: "123"
  });

  const handle = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white max-w-[500px]">
      <h2 className="text-xl font-semibold mb-6">Payment method</h2>

      <div className="space-y-5">
        <Field label="Cardholder name">
          <input name="name" value={form.name} onChange={handle} className="inp" />
        </Field>
        <Field label="Card number">
          <input name="number" value={form.number} onChange={handle} className="inp" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Expiry">
            <input name="exp" value={form.exp} onChange={handle} className="inp" />
          </Field>
          <Field label="CVC">
            <input name="cvc" value={form.cvc} onChange={handle} className="inp" />
          </Field>
        </div>
      </div>

      <button className="mt-8 px-5 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90">
        Save
      </button>
    </section>
  );
}

const Field = ({ label, children }) => (
  <label className="block text-sm font-medium text-gray-700 space-y-2">
    <span>{label}</span>
    {children}
  </label>
);

/* tiny style helper */
const inp =
  "inp border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none";
