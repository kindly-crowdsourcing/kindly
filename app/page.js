"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
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
} from "lucide-react";

import { useState, useEffect } from "react";

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
              Kontakty
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-10 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Zapoj se a spoluvytvářej projekty,
              <span className="block text-blue-600 dark:text-blue-400">
                které změní svět!
              </span>
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
          </div>
        </div>
      </section>

      {/* Co to vlastně je */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Jak <b>BE-HELPFUL</b> vlastně funguje?
            </h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 lg:gap-25">
              {/* Pyramid left */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Top row of inverted pyramid */}
                <div className="flex justify-center gap-16 mb-2">
                  <div className="flex flex-col items-center group cursor-pointer">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2 transition-transform duration-200 group-hover:scale-110 group-focus:scale-110">
                      <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="dark:text-gray-200 text-gray-700 font-medium mt-1 group-hover:text-blue-700 transition-colors">
                      Jednotlivci
                    </span>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2 transition-transform duration-200 group-hover:scale-110 group-focus:scale-110">
                      <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="dark:text-gray-200 text-gray-700 font-medium mt-1 group-hover:text-blue-700 transition-colors">
                      Organizace
                    </span>
                  </div>
                </div>
                {/* Diagonal arrows from top to bottom */}
                <div className="flex justify-center items-center gap-32 -mb-2">
                  <span
                    className="flex justify-center"
                    style={{ transform: "rotate(20deg)" }}
                  >
                    <ArrowDownRight className="h-8 w-8 text-blue-400 dark:text-blue-300 opacity-80" />
                  </span>
                  <span
                    className="flex justify-center"
                    style={{ transform: "rotate(-20deg)" }}
                  >
                    <ArrowDownLeft className="h-8 w-8 text-blue-400 dark:text-blue-300 opacity-80" />
                  </span>
                </div>
                {/* Bottom of inverted pyramid */}
                <div className="flex justify-center mt-2">
                  <div className="flex flex-col items-center group cursor-pointer">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2 transition-transform duration-200 group-hover:scale-110 group-focus:scale-110">
                      <Heart className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="dark:text-gray-200 text-gray-700 font-medium mt-1 group-hover:text-blue-700 transition-colors">
                      Dobrovolnictví
                    </span>
                  </div>
                </div>
              </div>
              {/* List right */}
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 mb-6 max-w-xl text-base">
                <li>
                  Be-helpful je bezplatná crowdsourcingová platforma, která
                  propojuje lidi s vizemi a dobrovolníky ochotné přispět svými
                  schopnostmi, časem nebo zdroji s cílem přinést pozitivní změnu
                  do společnosti.
                </li>
                <li>
                  Nezáleží na tom, jestli jsi programátor, ekonom, právník,
                  student, důchodce nebo investor – každý z nás má jedinečné
                  dary, které jsou důležité a mohou měnit svět kolem nás.
                </li>
                <li>
                  Spolupráce nám nejen umožňuje dělat dobro, ale zároveň
                  zesiluje dopad každého z nás.
                </li>
                <li>
                  I pár hodin vašeho času, pokud je veden ochotou pomoci, může
                  přinést velkou změnu do života někoho jiného.
                </li>
                <li>Více o našem příběhu</li>
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
            <div className="text-center p-8 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Coins className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Podporovatelé a investoři
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lidi, kteří chtějí finančně podpořit smysluplné projekty.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up animation-delay-600">
              <Building2 className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="uppercase text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                Organizace a školy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instituce hledající partnery pro spolupráci na projektech.
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
              Jaké výhody má <b>BE-HELPFUL</b> platforma?
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
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-2 group">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                alt="Project Management Coaching"
                width={400}
                height={144}
                className="rounded-xl h-36 w-full object-cover mb-4 group-hover:scale-[1.03] transition-transform duration-300"
                style={{ objectFit: "cover", width: "100%", height: "144px" }}
                unoptimized
              />
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-lg mb-2">
                Management
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Project Management Coaching
              </h4>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                By Choosewood Park CDC, Inc.
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Time:</b> 1-5 hours per week
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Type:</b> <span className="text-green-700">Virtual</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-2 group">
              <Image
                src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=400&q=80"
                alt="Fundraising Plan Review"
                width={400}
                height={144}
                className="rounded-xl h-36 w-full object-cover mb-4 group-hover:scale-[1.03] transition-transform duration-300"
                style={{ objectFit: "cover", width: "100%", height: "144px" }}
                unoptimized
              />
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-3 py-1 rounded-lg mb-2">
                Fundraising
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Fundraising Plan Review
              </h4>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                By Life After The Wall INC
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Time:</b> 1-5 hours per week
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Type:</b> <span className="text-green-700">Virtual</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-2 group">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Fundraising Prospects Research"
                width={400}
                height={144}
                className="rounded-xl h-36 w-full object-cover mb-4 group-hover:scale-[1.03] transition-transform duration-300"
                style={{ objectFit: "cover", width: "100%", height: "144px" }}
                unoptimized
              />
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-3 py-1 rounded-lg mb-2">
                Fundraising
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Fundraising Prospects Research
              </h4>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                By First Pioneer Valley Dream Center
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Time:</b> 1-5 hours per week
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Type:</b> <span className="text-green-700">Virtual</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-2 group">
              <Image
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Vehicle Text Creation"
                width={400}
                height={144}
                className="rounded-xl h-36 w-full object-cover mb-4 group-hover:scale-[1.03] transition-transform duration-300"
                style={{ objectFit: "cover", width: "100%", height: "144px" }}
                unoptimized
              />
              <span className="inline-block bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 text-xs font-semibold px-3 py-1 rounded-lg mb-2">
                Communication & PR
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Vehicle Text Creation
              </h4>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                By Outdoor Life Leadership
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Time:</b> 1-5 hours per week
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                <b>Type:</b> <span className="text-green-700">Virtual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pt-12 pb-10 my-12 bg-blue-50 dark:bg-gray-800 border-blue-100 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Zůstaňte v obraze!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Zadejte svůj e-mail a my vám dáme vědět, až bude Behelpful spuštěn.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Váš e-mail"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-colors"
              aria-label="E-mail"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              disabled
              title="Přihlášení bude brzy dostupné"
            >
              Přihlásit se
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6">
            Nebudeme posílat spam. Odhlásit se můžete kdykoliv.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-blue-400 mb-4">
                behelpful
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
                <a href="mailto:info@be-helpful.com">info@be-helpful.com</a>
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
