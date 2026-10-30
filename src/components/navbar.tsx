"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe2, ChevronDown } from "lucide-react";
import { useSite } from "./site-providers";

const links = [
  { href: "/", id: "Beranda", en: "Home" },
  { href: "/services", id: "Layanan", en: "Services" },
  { href: "/portfolio", id: "Portofolio", en: "Portfolio" },
  { href: "/about", id: "Tentang Kami", en: "About" },
  { href: "/pricing", id: "Harga", en: "Pricing" },
  { href: "/faq", id: "FAQ", en: "FAQ" },
  { href: "/contact", id: "Kontak", en: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); setLangOpen(false); }, [pathname]);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage } = useSite();
  const label = (id: string, en: string) => language === "id" ? id : en;

  return (
    <header className="sticky top-0 z-50 border-b border-theme" style={{ background: "color-mix(in srgb, var(--surface) 90%, transparent)", backdropFilter: "blur(16px)" }}>
      <div className="container-page flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-black text-[#062b29]">W</span>
          <span className="leading-tight"><strong className="block text-lg tracking-tight">WebCraft<span className="text-primary">.</span></strong><small className="text-muted text-[10px] tracking-[.19em]">DIGITAL STUDIO</small></span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`nav-link text-[13px] font-semibold transition hover:text-primary ${pathname === link.href ? "is-active" : "text-muted"}`}>{label(link.id, link.en)}</Link>)}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="btn-secondary !rounded-lg !px-3 !py-2 text-xs"><Globe2 size={15}/>{language.toUpperCase()}<ChevronDown size={13}/></button>
            {langOpen && <div className="surface border-theme absolute right-0 top-12 z-20 min-w-28 rounded-xl border p-1 shadow-xl">
              <button onClick={() => {setLanguage("id");setLangOpen(false)}} className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[var(--surface-soft)]">Indonesia</button>
              <button onClick={() => {setLanguage("en");setLangOpen(false)}} className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[var(--surface-soft)]">English</button>
            </div>}
          </div>
          <button aria-label="Ganti tema" onClick={toggleTheme} className="btn-secondary !rounded-lg !p-2.5">{theme === "light" ? <Moon size={17}/> : <Sun size={17}/>}</button>
          <Link href="/contact" className="btn-primary !rounded-lg !px-4 !py-2.5 text-xs">{label("Konsultasi", "Get a quote")}</Link>
        </div>

        <button className="rounded-lg border border-theme p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X/> : <Menu/>}</button>
      </div>

      {open && <div id="mobile-navigation" className="surface border-theme border-t px-5 pb-5 pt-3 xl:hidden">
        <nav className="flex flex-col">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`border-b border-theme py-3 text-sm font-semibold ${pathname === link.href ? "text-primary" : ""}`}>{label(link.id, link.en)}</Link>)}
        </nav>
        <div className="mt-4 flex gap-2">
          <button onClick={toggleTheme} className="btn-secondary flex-1">{theme === "light" ? <Moon size={16}/> : <Sun size={16}/>} {theme === "light" ? "Dark mode" : "Light mode"}</button>
          <button onClick={() => setLanguage(language === "id" ? "en" : "id")} className="btn-secondary flex-1"><Globe2 size={16}/>{language === "id" ? "English" : "Indonesia"}</button>
        </div>
      </div>}
    </header>
  );
}
