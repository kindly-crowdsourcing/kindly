"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");
    try {
      const res = await fetch("/api/emailsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
        setMsg("Díky! Jseš na seznamu. Dáme ti vědět. <3");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data.error || "Něco se pokazilo. Upsík.");
      }
    } catch {
      setStatus("error");
      setMsg("Chyba internetu. Zkus to příště.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Zůstaňte v obraze!
      </h2>

      {status !== "success" && (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Zadejte svůj e-mail a my vám dáme vědět, až bude Kindly spuštěné.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="Váš e-mail"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-colors"
              aria-label="E-mail"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              disabled={status == "loading"}
              title="Přihlášení bude brzy dostupné"
            >
              {status === "loading" ? "Zadejte e-mail" : "Přihlásit se!"}
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6">
            Nebudeme posílat spam. Odhlásit se můžete kdykoliv.
          </p>
        </>
      )}

      {msg && status === "success" && (
        <p className="text-lg font-semibold mt-8">{msg}</p>
      )}
    </div>
  );
}
