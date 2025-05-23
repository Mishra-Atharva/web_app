// src/pages/users/admin/components/demographicspanel.jsx
export default function DemographicsPanel({ male, female, other }) {
  return (
    <div className="col-span-full rounded-2xl border border-gray-200 p-4">
      <h2 className="text-sm font-medium mb-3">Demographic Data</h2>
      <div className="flex gap-6 text-xs">
        <Bar label="Male"    pct={male} />
        <Bar label="Female"  pct={female} />
        <Bar label="Other"   pct={other} />
      </div>
    </div>
  );
}

function Bar({ label, pct }) {
  return (
    <div className="flex-1">
      <div
        className="h-1 mb-1 bg-gray-300 rounded"
        style={{ width: `${pct}%` }}
      />
      {label} — {pct}%
    </div>
  );
}
