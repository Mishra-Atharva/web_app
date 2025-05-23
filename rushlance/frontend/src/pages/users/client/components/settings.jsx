/*  src/pages/users/client/components/settings.jsx  */

export default function ClientSettings() {
  return (
    <section className="rounded-2xl border border-gray-200 p-8 bg-white max-w-[500px]">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <p className="text-gray-600 mb-4">
        Profile preferences coming soon.
      </p>

      <fieldset className="space-y-4">
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" className="accent-gray-700" defaultChecked />
          Email notifications
        </label>

        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" className="accent-gray-700" />
          SMS notifications
        </label>
      </fieldset>

      <button className="mt-6 px-5 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90">
        Save changes
      </button>
    </section>
  );
}
