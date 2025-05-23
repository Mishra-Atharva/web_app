//  client “Dashboard”
export default function ClientHome({ profile = {} }) {
  const { fullName = "Client", email = "email@example.com" } = profile;

  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Welcome back, {fullName}!</h2>
      <p className="text-gray-600 mb-6">{email}</p>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card label="Total Bookings" value="8" />
        <Card label="Pending"        value="3" />
        <Card label="Completed"      value="5" />
      </div>
    </section>
  );
}

function Card({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 border rounded-lg p-4 bg-gray-50">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}
