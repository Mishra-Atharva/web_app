// src/pages/users/admin/components/statcard.jsx
export default function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}
