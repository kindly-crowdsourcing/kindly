"use client";

import { useState, useRef, useEffect, useReducer } from "react";
import Link from "next/link";
import { ThemeToggle } from "../../components/theme-toggle";
import {
  ClipboardList,
  Send,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Globe,
} from "lucide-react";

// --- DEBUG: zjisti zda se komponenta remountuje (pak se ztratí state) ---
const useMountDebug = () => {
  const mounts = useRef(0);
  useEffect(() => {
    mounts.current += 1;
    // Odkomentuj pokud chceš sledovat:
    // console.log("DotaznikPage mount count:", mounts.current);
  }, []);
};

const initialState = {
  role: "",
  projektFunkce: [],
  zapojeniPomoc: [],
  projektyZajem: [],
  motivace: [],
  frekvence: "",
  souhlas: false,
};

// Moved out of component so object identity stays stable across renders
const OPTIONS = {
  role: ["Mám projekt / vizi", "Dobrovolník", "Investor", "Organizace"],
  projektFunkce: [
    "Přehledné rozhraní",
    "Správa týmu / úkoly",
    "Kalendář & harmonogram",
    "Finanční podpora / fundraising",
    "Sdílení know‑how / dokumenty",
    "Veřejný profil projektu",
    "Gamifikace (odznaky, body)",
    "Možnost hlasovat o prioritách",
    "Open source (přispívat kódem)",
  ],
  zapojeniPomoc: [
    "Filtrování podle dovedností",
    "Doporučování projektů (AI)",
    "Krátkodobé mikro‑úkoly",
    "Chat / bezpečné zprávy",
    "Ověřené (verifikované) projekty",
    "Transparentní stav / progres",
  ],
  projektyZajem: [
    "Sociální pomoc",
    "Vzdělávání",
    "Technologie / IT",
    "Životní prostředí",
    "Komunita / sousedství",
    "Zdraví a wellbeing",
  ],
  motivace: [
    "Smysl & dopad",
    "Učení se",
    "Networking",
    "Portfolio / reputace",
    "Hodnoty / víra",
    "Radost z pomoci",
  ],
  frekvence: [
    "Jednorázově",
    "1–2× měsíčně",
    "1× týdně",
    "Několikrát týdně",
    "Téměř denně",
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };
    case "TOGGLE_IN":
      return {
        ...state,
        [action.key]: state[action.key].includes(action.value)
          ? state[action.key].filter((v) => v !== action.value)
          : [...state[action.key], action.value],
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function DotaznikPage() {
  useMountDebug();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Použijeme konstantu OPTIONS definovanou mimo komponentu
  const opts = OPTIONS;

  const setField = (key, value) => dispatch({ type: "SET", key, value });
  const toggleArr = (key, value) => dispatch({ type: "TOGGLE_IN", key, value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const formData = new FormData(e.currentTarget);

    const otherProjekt = formData.get("projektFunkceOther");
    const otherZapojeni = formData.get("zapojeniPomocOther");
    const otherProjTyp = formData.get("projektyZajemOther");
    const otherMotiv = formData.get("motivaceOther");
    const feedbackVal = formData.get("feedback")?.toString() || "";
    const emailVal = formData.get("email")?.toString() || "";

    const payload = {
      ...state,
      // doplníme případné 'jiné'
      projektFunkce: state.projektFunkce.concat(
        otherProjekt ? [otherProjekt.toString()] : []
      ),
      zapojeniPomoc: state.zapojeniPomoc.concat(
        otherZapojeni ? [otherZapojeni.toString()] : []
      ),
      projektyZajem: state.projektyZajem.concat(
        otherProjTyp ? [otherProjTyp.toString()] : []
      ),
      motivace: state.motivace.concat(
        otherMotiv ? [otherMotiv.toString()] : []
      ),
      feedback: feedbackVal,
      email: emailVal,
    };

    try {
      console.log("ODESÍLÁM:", payload);
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } catch {
      alert("Chyba při odesílání");
    } finally {
      setSending(false);
    }
  };

  // Jednoduché komponenty
  const Section = ({ title, desc, children }) => (
    <fieldset className="border border-blue-100 dark:border-blue-800/50 rounded-xl p-5 bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm">
      <legend className="px-2 text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
        <HelpCircle className="w-4 h-4" />
        {title}
      </legend>
      {desc && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{desc}</p>
      )}
      {children}
    </fieldset>
  );

  const PillRadios = ({ name, list, value, onChange }) => (
    <div className="flex flex-wrap gap-3">
      {list.map((v) => {
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={
              "px-4 py-2 rounded-full text-sm border transition-all " +
              (active
                ? "bg-blue-600 text-white shadow border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-transparent hover:bg-blue-100 dark:hover:bg-blue-900/40")
            }
            aria-pressed={active}
          >
            {v}
          </button>
        );
      })}
      <input type="hidden" name={name} value={value} />
    </div>
  );

  const CheckGrid = ({ name, list, stateKey }) => (
    <div className="grid sm:grid-cols-2 gap-2">
      {list.map((v) => {
        const active = state[stateKey].includes(v);
        return (
          <label
            key={v}
            className={
              "flex items-start gap-2 text-sm px-3 py-2 rounded-lg border cursor-pointer transition-colors " +
              (active
                ? "border-blue-400 bg-blue-50 dark:bg-blue-900/40 dark:border-blue-500"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-500")
            }
          >
            <input
              type="checkbox"
              name={name}
              value={v}
              checked={active}
              onChange={() => toggleArr(stateKey, v)}
              className="mt-0.5 accent-blue-600"
            />
            <span className="text-gray-700 dark:text-gray-200">{v}</span>
          </label>
        );
      })}
    </div>
  );

  const OtherInput = ({ label, name, placeholder }) => (
    <div className="mt-4">
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
        {label} (jiné – volitelné)
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40 text-sm text-gray-800 dark:text-gray-100"
        autoComplete="off"
      />
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-4">
      {/* Top bar with Back + Theme toggle */}
      <div className="max-w-3xl mx-auto flex items-center justify-between mb-8 -mt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/60 dark:hover:bg-blue-900/30 shadow-sm transition-colors"
        >
          <span className="inline-block w-2.5 h-2.5 -ml-1 border-l-2 border-b-2 border-current rotate-45"></span>
          Zpět
        </Link>
        <ThemeToggle />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 mb-4 shadow-sm">
            <ClipboardList className="w-9 h-9 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Krátký dotazník
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base max-w-xl mx-auto">
            Pomozte nám prioritizovat funkce platformy <b>KINDLY</b>.
          </p>
        </div>

        {sent ? (
          <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-2xl p-10 text-center shadow-lg">
            <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Odesláno – děkujeme!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Vaše odpovědi jsme uložili.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl"
            noValidate
          >
            <Section title="Vaše role" desc="Kde se vidíte primárně?">
              <PillRadios
                name="role"
                list={opts.role}
                value={state.role}
                onChange={(v) => setField("role", v)}
              />
              {state.role && (
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Vybráno: {state.role}
                </p>
              )}
            </Section>

            <Section
              title="Máte projekt / vizi?"
              desc="Funkce, které byste uvítali."
            >
              <CheckGrid
                name="projektFunkce[]"
                list={opts.projektFunkce}
                stateKey="projektFunkce"
              />
              <OtherInput
                label="Další funkce"
                name="projektFunkceOther"
                placeholder="Např. export dat..."
              />
            </Section>

            <Section
              title="Chcete se zapojit?"
              desc="Co vám pomůže najít vhodné projekty?"
            >
              <CheckGrid
                name="zapojeniPomoc[]"
                list={opts.zapojeniPomoc}
                stateKey="zapojeniPomoc"
              />
              <OtherInput
                label="Další potřeba"
                name="zapojeniPomocOther"
                placeholder="Např. lepší filtr lokality..."
              />
            </Section>

            <Section title="Typy projektů" desc="Co vás zajímá?">
              <CheckGrid
                name="projektyZajem[]"
                list={opts.projektyZajem}
                stateKey="projektyZajem"
              />
              <OtherInput
                label="Jiný typ"
                name="projektyZajemOther"
                placeholder="Např. kultura..."
              />
            </Section>

            <Section title="Motivace" desc="Proč se zapojujete?">
              <CheckGrid
                name="motivace[]"
                list={opts.motivace}
                stateKey="motivace"
              />
              <OtherInput
                label="Jiná motivace"
                name="motivaceOther"
                placeholder="Např. profesní růst..."
              />
            </Section>

            <Section title="Frekvence" desc="Reálná intenzita zapojení.">
              <PillRadios
                name="frekvence"
                list={opts.frekvence}
                value={state.frekvence}
                onChange={(v) => setField("frekvence", v)}
              />
              {state.frekvence && (
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Vybráno: {state.frekvence}
                </p>
              )}
            </Section>

            <Section title="Doplňující poznámka">
              <textarea
                rows={4}
                name="feedback"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40 text-sm text-gray-800 dark:text-gray-100 resize-none"
                placeholder="Např.: Chybí mi funkce pro..."
              />
            </Section>

            <Section title="Kontakt (nepovinné)">
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="vas@email.cz"
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40 text-sm text-gray-800 dark:text-gray-100 mb-4"
              />
            </Section>
            <label className="flex items-start gap-2 mx-7 text-xs text-gray-600 dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={state.souhlas}
                onChange={(e) => setField("souhlas", e.target.checked)}
                required
                className="mt-0.5 accent-blue-600"
              />
              <span>Souhlasím se zpracováním údajů (GDPR).</span>
            </label>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                disabled={sending || !state.souhlas}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Odesílám…
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Odeslat
                  </>
                )}
              </button>
            </div>
            <p className="text-center text-[11px] text-gray-500 dark:text-gray-500">
              Děkujeme za vyplnění.
            </p>
          </form>
        )}

        <div className="mt-16 text-center text-xs text-gray-400 dark:text-gray-600">
          Děkujeme, že přispíváte k tvorbě platformy.
          <Globe className="inline w-4 h-4 ml-1" />
        </div>
      </div>
    </main>
  );
}
