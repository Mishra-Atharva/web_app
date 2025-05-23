/*  card used by History – keep simple greyscale style  */

export default function Card({ item }) {
  const tag =
    item.status === "Completed"
      ? "bg-green-200 text-green-800"
      : "bg-yellow-200 text-yellow-800";

  return (
    <article className="border rounded-lg overflow-hidden bg-gray-50 flex flex-col">
      <div className="h-40 flex items-center justify-center text-gray-400">
        600 × 400
      </div>

      <div className="p-4 text-sm space-y-1">
        <p className="font-medium truncate">{item.title}</p>
        <p className="text-gray-500">{item.date}</p>
        <span className={`px-2 py-[2px] rounded text-xs ${tag}`}>
          {item.status}
        </span>
      </div>
    </article>
  );
}
