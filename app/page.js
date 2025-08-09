"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import NewsletterForm from "../components/NewsletterForm";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Brain,
  Smartphone,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Menu,
  X,
  Coins,
  Building2,
  Gift,
  Heart,
  Moon,
  Sun,
  ArrowDownRight,
  ArrowDownLeft,
  Lightbulb,
  Mail,
  MoveHorizontal,
  ClipboardList,
} from "lucide-react";

const sampleProjects = [
  {
    imageUrl:
      "https://cbhpraha.cz/wp-content/uploads/2025/06/Hledac-pokladu-2025-1024x576.webp",
    alt: "Hledač Pokladů Biblická škola",
    category: "Duchovní růst",
    title: "Biblická škola - hledač pokladů",
    description:
      "Zveme Tě ke studiu biblické školy Hledači pokladů! Tématem ročníku 2025 je proroctví – jedno z nejdůležitějších témat pro dnešní dobu.",
    time: "1x za 14 dní, v pondělí",
    how: "Online přes Zoom",
  },
  {
    imageUrl: "ZmrzkaZKolaImg.png",
    alt: "Zmrzka z kola, Josef Bajzik",
    category: "Evangelizace, Podnikání",
    title: "Zmrzka z kola",
    description:
      "Bus zastávka Ke Kateřinkám, Opatov. Každý den otevřeno 10:00 - 19:30. Pravidelně projíždíme i Centrálním Parkem na Chodově.",
    time: "Denně, 10:00-19:30",
    how: "Osobně",
  },
  {
    imageUrl:
      "https://hospickridla.cz/wp-content/uploads/2021/01/dobrovolnici_300.jpg",
    alt: "Pomoc seniorům, Evangelizace",
    category: "Pomoc seniorům, Evangelizace",
    title: "Hospic Křídla",
    description:
      "Pomoc se zajištěním chodu organizace. Pomoc v rodinách (v případě vyžádání pacienta a pečující rodiny). ",
    time: "Občas",
    how: "Osobně",
  },
  {
    imageUrl:
      "https://6ca6e7d713.clvaw-cdnwnd.com/8fc47a6147ea3857c860570b31772115/200000131-f0fbef0fc1/Bílina%20na%20hřišti%201.webp",
    alt: "Pomoc dětem, Evangelizace",
    category: "Pomoc dětem, Evangelizace",
    title: "Lucie Pohanková",
    description:
      "Jsem křesťanka, členka Apoštolské církve (sbor CBH Praha) a sloužím evangeliem lidem na ulicích a v sociálně vyloučených lokalitách především v Ústeckém kraji, kde žiji.",
    time: "Občas",
    how: "Osobně",
  },
];

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-gray-200 dark:border-gray-700 shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-gray-100 dark:border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center gap-5">
                <Image
                  src="/assets/app-icon.png"
                  width={40}
                  height={40}
                  alt="App Icon"
                  className="h-10 w-10"
                />
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  kindly
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
                >
                  O nás
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#pricing"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
                >
                  Kontakt
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Register/Login button: minimal, adaptive */}
              {/* Desktop (lg and up): pill with icon and text */}
              <button className="hidden lg:flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-1.5 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/60 dark:hover:bg-blue-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-blue-500/30 group min-h-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.25a7.25 7.25 0 1115 0v.25a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.25z"
                  />
                </svg>
                <span className="text-gray-800 dark:text-gray-100 text-xs font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Registrace / Přihlášení
                </span>
              </button>

              {/* Tablet & Mobile (below lg): icon only, smaller */}
              <button
                className="flex lg:hidden items-center justify-center w-9 h-9 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/60 dark:hover:bg-blue-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:focus:ring-blue-500/30"
                aria-label="Register or Login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.25a7.25 7.25 0 1115 0v.25a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.25z"
                  />
                </svg>
              </button>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              FAQ
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              O nás
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-10 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* FIX: stabilní H1 bez flex (bránilo shodě při hydrataci) */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="whitespace-nowrap">Spolu tvoříme</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">změnu!</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Máte projekt se společenským dopadem nebo zájem se aktivně
              zapojit? Zjistěte, jak můžete přispět k pozitivní změně ve svém
              okolí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Mám nápad
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border-2 hover:border-blue-600 hover:text-blue-600"
              >
                Chci se zapojit
              </Button>
            </div>
            <div className="mt-8">
              {/* site under construction */}
              <span className="inline-block bg-blue-200 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow-md border border-blue-400">
                ⚠️ Platforma ve vývoji - Jedná se pouze o ilustrativní stránku.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Co to vlastně je */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Jak <b>KINDLY</b> vlastně funguje?
            </h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 lg:gap-25">
              {/* Pyramid left */}
              <div className="flex flex-col items-center flex-shrink-0 select-none">
                {/* Top row: Visionaries & Volunteers */}
                <div className="flex justify-center items-center gap-4 mb-2">
                  {/* Visionaries */}
                  <div className="flex flex-col items-center w-[100px]">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2">
                      <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="text-blue-900 dark:text-blue-200 font-bold text-base mb-1">
                      Vizionáři
                    </span>
                  </div>

                  {/* Two-way horizontal arrow */}
                  <span className="flex items-center justify-center">
                    <MoveHorizontal className="h-8 w-8 text-blue-400 dark:text-blue-300 opacity-80 mb-8" />
                  </span>

                  {/* Volunteers */}
                  <div className="flex flex-col items-center w-[100px]">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2">
                      <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="text-blue-900 dark:text-blue-200 font-bold text-base mb-1">
                      Dobrovolníci
                    </span>
                  </div>
                </div>
                {/* Diagonal arrows down */}
                <div className="flex justify-center items-center gap-24 -mb-2">
                  <span
                    className="flex justify-center"
                    style={{ transform: "rotate(25deg)" }}
                  >
                    <ArrowDownRight className="h-8 w-8 text-blue-400 dark:text-blue-300 opacity-80" />
                  </span>
                  <span
                    className="flex justify-center"
                    style={{ transform: "rotate(-25deg)" }}
                  >
                    <ArrowDownLeft className="h-8 w-8 text-blue-400 dark:text-blue-300 opacity-80" />
                  </span>
                </div>
                {/* Bottom: Impact */}
                <div className="flex flex-col items-center mt-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2">
                    <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="text-blue-900 dark:text-blue-200 font-bold text-base">
                    Společenský dopad
                  </span>
                </div>
              </div>
              {/* List right */}
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-6 max-w-xl text-base">
                <li>
                  Kindly je bezplatná opensource platforma, která propojuje lidi
                  s vizemi a dobrovolníky ochotné přispět svými schopnostmi,
                  časem nebo zdroji s cílem přinést pozitivní změnu do
                  společnosti.
                </li>
                <li>
                  Nezáleží na tom, jestli jsi programátor, ekonom, právník,
                  student, důchodce nebo investor – každý z nás má jedinečné
                  dary, které jsou důležité a mohou měnit svět kolem nás. Pokud
                  hledáte možnost, jak se zapojit, i pár hodin vašeho času,
                  vedených ochotou pomoci, může přinést velkou změnu do života
                  někoho jiného.
                </li>
                <li>
                  Založte si kartu ke svému projektu nebo si najděte aktivní
                  projekty ve svém okolí a jednoduše se propojte. Spolupráce nám
                  nejen umožňuje konat dobro, ale zároveň zesiluje dopad každého
                  z nás.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Co udělat hned */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 animate-fade-in-up">
              Co můžeš udělat hned?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Udělej první krok a přidej se k nám! Vyber si, co ti dává smysl:
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <ol className="space-y-6 text-left text-lg">
              <li className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all">
                <Lightbulb className="h-7 w-7 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Sdílej svůj nápad
                </span>
              </li>
              <li className="flex items-center gap-4 bg-green-50 dark:bg-green-900/20 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all">
                <Heart className="h-7 w-7 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Zapoj se jako dobrovolník
                </span>
              </li>
              <li className="flex items-center gap-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all">
                <Mail className="h-7 w-7 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Zaregistruj se na newsletter
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Kdo se může zapojit?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up">
              <Brain className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Lidi s nápady
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lidi, kteří hledají podporu nebo zpětnou vazbu.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-300">
              <Users className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Dobrovolníci a odborníci
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lidi, co chtějí přispět svými dovednostmi.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Building2 className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                Organizace (firmy, školy, neziskovky)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instituce hledající partnery pro projekty nebo zapojení (sdílení
                projektů, teambuildingy).
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Coins className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Podporovatelé a investoři
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lidi, kteří chtějí finančně podpořit smysluplné projekty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Výhody section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Jaké výhody má <b>KINDLY</b> platforma?
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up">
              <Gift className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                ZDARMA
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Použití této platformy je pro všechny kompletně zdarma.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-300">
              <Shield className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                BEZPEČNOST
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bezpečné a transparentní propojení mezi lidmi.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Zap className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                PODPORA
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Podpora při rozjíždění projektů.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Star className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                REPUTACE
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Přiležitost rozvíjet svůj profil, reputaci či portfolio.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Heart className="h-16 w-16 text-red-600 dark:text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Vnitřní naplnění
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pomoc tam, kde je to potřeba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Opportunities Section */}
      <section className="pb-10 pt-10 bg-white dark:bg-gray-900 transition-colors duration-300">
        <p className="text-gray-200 dark:text-gray-600 pl-12">SAMPLE DATA</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Search bar */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4 px-4 py-4 mb-10 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
            <input
              className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl focus:bg-blue-50 dark:focus:bg-gray-900/40 transition-all duration-200 text-base"
              placeholder="Where? (Místo, oblast)"
              disabled
            />
            <input
              className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl focus:bg-blue-50 dark:focus:bg-gray-900/40 transition-all duration-200 text-base"
              placeholder="When? (Kdy, časově)"
              disabled
            />
            <input
              className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl focus:bg-blue-50 dark:focus:bg-gray-900/40 transition-all duration-200 text-base"
              placeholder="What? (Co hledáš)"
              disabled
            />
            <input
              className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl focus:bg-blue-50 dark:focus:bg-gray-900/40 transition-all duration-200 text-base"
              placeholder="How? (Jak se zapojit)"
              disabled
            />
            <button className="ml-0 md:ml-2 mt-2 md:mt-0 flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                imageUrl={project.imageUrl}
                alt={project.alt}
                category={project.category}
                title={project.title}
                description={project.description}
                time={project.time}
                how={project.how}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pt-12 pb-10 my-12 bg-blue-50 dark:bg-gray-800 border-blue-100 dark:border-gray-700">
        <NewsletterForm />
      </section>

      {/* Dotazník sekce */}
      <section>
        <div className="flex justify-center py-10">
          <Link
            href="/dotaznik" /* replace with real survey URL */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:focus:ring-blue-500/40"
          >
            <ClipboardList className="w-5 h-5" />
            Vyplnit krátký dotazník
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-blue-400 mb-4">
                kindly
              </div>
              <p className="text-gray-400 mb-4">
                Crowdsourcing platforma, co propojuje lidi.
              </p>
              <div className="text-sm text-gray-400">
                <p>Neziskovka</p>
                <p>Praha, Česká Republika</p>
                <p>IČO: 12345678</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                Firma
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    O nás
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    Pro Média
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    Podpora
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                Legislativa
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    Ochrana osobních údajů
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    Pravidla použití
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:hover:text-white hover:text-blue-400 transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                Kontakt
              </h3>
              <div className="space-y-2 text-gray-400">
                <a href="mailto:kindly.eu.platform@gmail.com">
                  kindly.eu.platform@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Be-hepful. Všechny práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
