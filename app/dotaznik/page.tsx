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

interface FormState {
  role: string;
  projektFunkce: string[];
  zapojeniPomoc: string[];
  projektyZajem: string[];
  motivace: string[];
  frekvence: string;
  souhlas: boolean;
  // Uncontrolled fields that need to be controlled
  projektFunkceOther: string;
  zapojeniPomocOther: string;
  projektyZajemOther: string;
  motivaceOther: string;
  feedback: string;
  email: string;
}

type FormAction =
  | { type: "SET"; key: keyof FormState; value: any }
  | { type: "TOGGLE_IN"; key: keyof FormState; value: string }
  | { type: "RESET" };

const initialState: FormState = {
  role: "",
  projektFunkce: [],
  zapojeniPomoc: [],
  projektyZajem: [],
  motivace: [],
  frekvence: "",
  souhlas: false,
  // Initialize new fields
  projektFunkceOther: "",
  zapojeniPomocOther: "",
  projektyZajemOther: "",
  motivaceOther: "",
  feedback: "",
  email: "",
};

// Moved out of component so object identity stays stable across renders
const OPTIONS = {
  role: ["Mám projekt / vizi", "Dobrovolník", "Investor", "Organizace"],
  projektFunkce: [
    "Duchovní poradenství",
    "Poradenství v oblasti financí (rozpočty, finanční plány)",
    "Poradenství v oblasti účetnictví a daní",
    "Fundraising",
    "Pomoc v oblasti IT (založení webu)",
    "Poradenství v oblasti marketingu",
    "Project management",
    "Právní poradenství",
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
    "Pomoc dětem",
    "Pomoc seniorům",
    "Evangelizace",
    "Podnikání s pozitivním společenským dopadem",
    "Pomoc znevýhodněným",
    "Životní prostředí",
    "Komunita / sousedství",
    "Vzdělávání",
    "Misie",
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

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };
    case "TOGGLE_IN":
      if (
        action.key !== "role" &&
        action.key !== "frekvence" &&
        action.key !== "souhlas"
      ) {
        // Arrays only
        return {
          ...state,
          [action.key]: (state[action.key] as string[]).includes(action.value)
            ? (state[action.key] as string[]).filter(
                (v: string) => v !== action.value
              )
            : [...(state[action.key] as string[]), action.value],
        };
      }
      return state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

interface PillRadiosProps {
  name: string;
  list: string[];
  value: string;
  onChange: (value: string) => void;
}

interface CheckGridProps {
  name: string;
  list: string[];
  stateKey: keyof FormState;
}

interface OtherInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

// Components moved outside to prevent re-creation on each render
const Section = ({ title, desc, children }: SectionProps) => (
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

const PillRadios = ({ name, list, value, onChange }: PillRadiosProps) => (
  <div className="flex flex-wrap gap-3">
    {list.map((v: string) => {
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

interface CheckGridInternalProps extends CheckGridProps {
  state: FormState;
  toggleArr: (key: keyof FormState, value: string) => void;
}

const CheckGrid = ({
  name,
  list,
  stateKey,
  state,
  toggleArr,
}: CheckGridInternalProps) => (
  <div className="grid sm:grid-cols-2 gap-2">
    {list.map((v: string) => {
      const active = (state[stateKey] as string[]).includes(v);
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

const OtherInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}: OtherInputProps) => (
  <div className="mt-4">
    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
      {label} (jiné – volitelné)
    </label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40 text-sm text-gray-800 dark:text-gray-100"
      autoComplete="off"
    />
  </div>
);

export default function DotaznikPage() {
  useMountDebug();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Použijeme konstantu OPTIONS definovanou mimo komponentu
  const opts = OPTIONS;

  const setField = (key: keyof FormState, value: any) =>
    dispatch({ type: "SET", key, value });
  const toggleArr = (key: keyof FormState, value: string) =>
    dispatch({ type: "TOGGLE_IN", key, value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setErrorMsg("");

    // Now all values are in state instead of FormData
    const payload = {
      ...state,
      // doplníme případné 'jiné' - now from state
      projektFunkce: state.projektFunkce.concat(
        state.projektFunkceOther ? [state.projektFunkceOther] : []
      ),
      zapojeniPomoc: state.zapojeniPomoc.concat(
        state.zapojeniPomocOther ? [state.zapojeniPomocOther] : []
      ),
      projektyZajem: state.projektyZajem.concat(
        state.projektyZajemOther ? [state.projektyZajemOther] : []
      ),
      motivace: state.motivace.concat(
        state.motivaceOther ? [state.motivaceOther] : []
      ),
      // feedback and email are already in state
    };

    try {
      const res = await fetch("/api/dotaznik", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data = null;
      try {
        data = await res.json();
      } catch (_) {}
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Neznámá chyba");
      }
      setSent(true);
    } catch (err) {
      console.error("Submit error", err);
      setErrorMsg((err as Error).message || "Chyba při odesílání");
    } finally {
      setSending(false);
    }
  };

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
                onChange={(v: string) => setField("role", v)}
              />
              {state.role && (
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Vybráno: {state.role}
                </p>
              )}
            </Section>

            <Section title="Typy projektů" desc="Co vás zajímá?">
              <CheckGrid
                name="projektyZajem[]"
                list={opts.projektyZajem}
                stateKey="projektyZajem"
                state={state}
                toggleArr={toggleArr}
              />
              <OtherInput
                label="Jiný typ"
                name="projektyZajemOther"
                placeholder="Např. kultura..."
                value={state.projektyZajemOther}
                onChange={(value) => setField("projektyZajemOther", value)}
              />
            </Section>

            <Section title="Frekvence" desc="Reálná intenzita zapojení.">
              <PillRadios
                name="frekvence"
                list={opts.frekvence}
                value={state.frekvence}
                onChange={(v: string) => setField("frekvence", v)}
              />
              {state.frekvence && (
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  Vybráno: {state.frekvence}
                </p>
              )}
            </Section>

            <Section
              title="Jaké funkce by tahle platforma měla mít?"
              desc="Funkce, které byste uvítali."
            >
              <CheckGrid
                name="projektFunkce[]"
                list={opts.projektFunkce}
                stateKey="projektFunkce"
                state={state}
                toggleArr={toggleArr}
              />
              <OtherInput
                label="Další funkce"
                name="projektFunkceOther"
                placeholder="Např. export dat..."
                value={state.projektFunkceOther}
                onChange={(value) => setField("projektFunkceOther", value)}
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
                state={state}
                toggleArr={toggleArr}
              />
              <OtherInput
                label="Další potřeba"
                name="zapojeniPomocOther"
                placeholder="Např. lepší filtr lokality..."
                value={state.zapojeniPomocOther}
                onChange={(value) => setField("zapojeniPomocOther", value)}
              />
            </Section>

            <Section title="Motivace" desc="Proč se zapojujete?">
              <CheckGrid
                name="motivace[]"
                list={opts.motivace}
                stateKey="motivace"
                state={state}
                toggleArr={toggleArr}
              />
              <OtherInput
                label="Jiná motivace"
                name="motivaceOther"
                placeholder="Např. profesní růst..."
                value={state.motivaceOther}
                onChange={(value) => setField("motivaceOther", value)}
              />
            </Section>

            <Section title="Doplňující poznámka">
              <textarea
                rows={4}
                name="feedback"
                value={state.feedback}
                onChange={(e) => setField("feedback", e.target.value)}
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
                value={state.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="vas@email.cz"
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40 text-sm text-gray-800 dark:text-gray-100 mb-4"
              />
            </Section>
            <label className="flex items-start gap-2 mx-7 text-xs text-gray-600 dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={state.souhlas}
                onChange={(e) => {
                  e.stopPropagation();
                  setField("souhlas", e.target.checked);
                }}
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
            {errorMsg && (
              <p className="text-center text-sm text-red-600 dark:text-red-400 -mt-2">
                {errorMsg}
              </p>
            )}
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
