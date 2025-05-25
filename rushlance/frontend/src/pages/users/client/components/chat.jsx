/* lightweight client–admin/freelancer chat stub */

import { useState } from "react";

export default function ClientChat() {
  const [msg, setMsg]   = useState("");
  const [log, setLog]   = useState([
    { me: false, text: "Hi! How are you?" }
  ]);

  const send = e => {
    e.preventDefault();
    if (!msg.trim()) return;
    setLog([...log, { me: true, text: msg.trim() }]);
    setMsg("");
    /* TODO: emit via WebSocket / fetch to backend */
  };

  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white flex flex-col h-[calc(100vh-200px)] max-w-[600px]">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {log.map((m, i) => (
          <p
            key={i}
            className={`px-4 py-2 rounded-lg w-fit max-w-[80%] text-sm ${
              m.me
                ? "ml-auto bg-gray-800 text-white"
                : "mr-auto bg-gray-100 text-gray-800"
            }`}
          >
            {m.text}
          </p>
        ))}
      </div>

      <form onSubmit={send} className="mt-4 flex gap-3">
        <input
          value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder="Type a message…"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm hover:opacity-90"
        >
          Send
        </button>
      </form>
    </section>
  );
}
