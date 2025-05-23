/*  src/pages/users/components/account_details.jsx  */
/* simple client account card */

export default function AccountDetails({
  name  = "Jane Client",
  email = "client@example.com",
  phone = "(555) 123-4567"
}) {
  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white flex gap-6 items-center max-w-[460px]">
      <img
        src="https://placehold.co/96x96?text=👤"
        alt=""
        className="w-16 h-16 rounded-full object-cover border"
      />

      <div className="text-sm">
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
      </div>
    </section>
  );
}
