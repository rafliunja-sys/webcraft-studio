
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe2,
  Sparkles,
} from "lucide-react";
import { useSite } from "./site-providers";

const showcases = [
  {
    brand: "Kopi Ruang",
    type: "COFFEE & CAFE",
    title: "Temukan ruang untuk cerita dan rasa.",
    desc: "Website kedai kopi dengan menu, cerita brand, dan informasi lokasi.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
    accent: "#d99b5b",
    label: "Cafe website",
  },
  {
    brand: "Flora Studio",
    type: "PLANT & LIFESTYLE",
    title: "Hadirkan suasana alami di setiap sudut.",
    desc: "Katalog tanaman dan dekorasi rumah dengan pengalaman belanja yang nyaman.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85",
    accent: "#6b9b70",
    label: "UMKM catalog",
  },
  {
    brand: "Mode Lokal",
    type: "LOCAL FASHION",
    title: "Gaya lokal, cerita yang berbeda.",
    desc: "Tampilan editorial untuk memperkenalkan koleksi fashion lokal.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    accent: "#9b7bb5",
    label: "Fashion store",
  },
  {
    brand: "Dapur Nusa",
    type: "CULINARY BUSINESS",
    title: "Kenalkan menu andalan kepada lebih banyak orang.",
    desc: "Profil usaha kuliner dengan menu unggulan dan jalur pemesanan.",
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1000&q=85",
    accent: "#d47c69",
    label: "Restaurant website",
  },
];

export function HeroShowcase() {
  const { language } = useSite();

  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState("");

  // Pergantian preview website
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % showcases.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  // Animasi typewriter
  useEffect(() => {
    const phrases =
      language === "id"
        ? [
            "lebih profesional.",
            "mudah ditemukan.",
            "siap berkembang.",
          ]
        : [
            "more professional.",
            "easier to find.",
            "ready to grow.",
          ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    setTyped("");

    function typeNextCharacter() {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        characterIndex += 1;
        setTyped(phrase.slice(0, characterIndex));

        if (characterIndex === phrase.length) {
          deleting = true;
          timeout = setTimeout(typeNextCharacter, 1600);
          return;
        }

        timeout = setTimeout(typeNextCharacter, 90);
        return;
      }

      characterIndex -= 1;
      setTyped(phrase.slice(0, characterIndex));

      if (characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeout = setTimeout(typeNextCharacter, 350);
        return;
      }

      timeout = setTimeout(typeNextCharacter, 45);
    }

    timeout = setTimeout(typeNextCharacter, 500);

    return () => clearTimeout(timeout);
  }, [language]);

  const demo = showcases[active];

  return (
    <section className="hero-section relative overflow-hidden text-white">
      <div className="hero-orb absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-30" />

      <div className="container-page hero-layout relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr]">

        {/* HERO TEXT */}
        <div className="hero-copy min-w-0">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-teal-200">
            <Sparkles size={14} />
            {language === "id"
              ? "Kehadiran digital untuk bisnis yang berkembang"
              : "Digital presence for growing businesses"}
          </div>

          <h1 className="heading-xl max-w-3xl">
            {language === "id"
              ? "Bangun Website Profesional untuk Bisnis"
              : "Build a Professional Website for Your Business"}

            <span
              className="mt-2 block min-h-[1.3em] text-teal-300"
              aria-live="polite"
              aria-atomic="true"
            >
              <span translate="no">{typed}</span>
              <span
                className="ml-1 inline-block font-normal animate-pulse"
                aria-hidden="true"
              >
                |
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            {language === "id"
              ? "Kami membantu UMKM dan bisnis kecil tampil lebih meyakinkan, menjangkau pelanggan, dan berkembang di dunia digital."
              : "We help small businesses build credibility, reach more customers, and grow in the digital world."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              {language === "id" ? "Mulai Konsultasi" : "Get Consultation"}
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {language === "id" ? "Lihat Demo Website" : "View Website Demo"}
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-300" />
              {language === "id" ? "Desain responsif" : "Responsive design"}
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-300" />
              {language === "id" ? "Demo website custom" : "Custom website demo"}
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-300" />
              {language === "id" ? "Fokus kebutuhan bisnis" : "Business-focused"}
            </span>
          </div>
        </div>

        {/* WEBSITE SHOWCASE */}
        <div className="hero-visual relative mx-auto w-full min-w-0 max-w-[590px]">
          <div className="absolute -inset-8 rounded-full bg-teal-400/15 blur-3xl" />

          <div className="showcase-window relative overflow-hidden rounded-[26px] border border-white/25 bg-white/10 p-2.5 shadow-2xl backdrop-blur sm:p-3">
            <div
              key={demo.brand}
              className="showcase-content overflow-hidden rounded-[18px] bg-[#f7f8f5] text-slate-900"
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-7 w-7 place-items-center rounded-lg text-xs font-black text-white"
                    style={{ background: demo.accent }}
                  >
                    {demo.brand.slice(0, 1)}
                  </span>

                  <strong className="text-sm sm:text-base">
                    {demo.brand}
                    <span style={{ color: demo.accent }}>.</span>
                  </strong>
                </div>

                <div className="hidden gap-4 text-[9px] font-bold text-slate-500 sm:flex">
                  <span>BERANDA</span>
                  <span>PRODUK</span>
                  <span>TENTANG</span>
                  <span>KONTAK</span>
                </div>

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-bold text-slate-500 sm:hidden">
                  MENU
                </span>
              </div>

              <div className="grid min-h-[280px] grid-cols-[1fr_.82fr] items-center gap-3 p-4 sm:min-h-[340px] sm:gap-5 sm:p-7">
                <div className="relative z-10">
                  <span
                    className="text-[8px] font-extrabold tracking-[.18em] sm:text-[10px]"
                    style={{ color: demo.accent }}
                  >
                    {demo.type}
                  </span>

                  <h2 className="mt-3 text-xl font-black leading-[1.08] tracking-tight sm:text-3xl">
                    {demo.title}
                  </h2>

                  <p className="mt-3 text-[9px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                    {demo.desc}
                  </p>

                  <span
                    className="mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[9px] font-bold text-white sm:text-[10px]"
                    style={{ background: demo.accent }}
                  >
                    {language === "id" ? "Jelajahi website" : "Explore website"}
                    <ArrowUpRight size={12} />
                  </span>
                </div>

                <div className="relative h-full min-h-[190px] overflow-hidden rounded-xl sm:min-h-[250px]">
                  <Image
                    key={demo.image}
                    src={demo.image}
                    alt={`Contoh desain ${demo.label}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 280px"
                    className="showcase-photo object-cover"
                    priority
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-bold text-slate-700">
                    {demo.label}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-4 pb-4 sm:px-6 sm:pb-6">
                {[
                  language === "id" ? "Desain menarik" : "Attractive design",
                  language === "id" ? "Mudah digunakan" : "Easy to use",
                  language === "id" ? "Siap berkembang" : "Ready to grow",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-white p-2 text-center text-[7px] font-bold text-slate-600 shadow-sm sm:p-3 sm:text-[9px]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PREVIEW INDICATOR */}
          <div className="showcase-caption mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Globe2 size={15} className="text-teal-300" />
              {language === "id"
                ? "Preview konsep website"
                : "Website concept preview"}
            </div>

            <div className="flex items-center gap-2">
              {showcases.map((item, index) => (
                <button
                  key={item.brand}
                  onClick={() => setActive(index)}
                  aria-label={`Lihat demo ${item.brand}`}
                  aria-pressed={active === index}
                  className={`h-2 rounded-full transition-all ${
                    active === index
                      ? "w-7 bg-teal-300"
                      : "w-2 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* FLOATING LABEL */}
          <div className="absolute -left-4 top-8 hidden items-center gap-2 rounded-xl border border-white/20 bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow-xl sm:flex">
            <Code2 size={15} className="text-teal-600" />
            {language === "id"
              ? "Konsep website khusus"
              : "Custom website concept"}
          </div>
        </div>
      </div>
    </section>
  );
}
