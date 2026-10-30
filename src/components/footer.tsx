import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-theme" style={{ background: "var(--surface)" }}>
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tight">WebCraft<span className="text-primary">.</span></Link>
          <p className="text-muted mt-4 max-w-sm text-sm leading-7">Membantu UMKM dan bisnis kecil membangun kehadiran digital melalui website yang profesional, fungsional, dan mudah digunakan.</p>
          <div className="mt-5 flex gap-3 text-muted"><a href="mailto:webcraftstudio@gmail.com" aria-label="Email"><Mail size={18}/></a><a href="https://wa.me/6285805491800" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a></div>
        </div>
        <div><h3 className="font-bold">Navigasi</h3><div className="text-muted mt-4 grid gap-3 text-sm"><Link href="/services">Layanan</Link><Link href="/portfolio">Portofolio</Link><Link href="/about">Tentang Kami</Link><Link href="/pricing">Harga</Link></div></div>
        <div><h3 className="font-bold">Hubungi Kami</h3><p className="text-muted mt-4 flex items-start gap-2 text-sm leading-6"><MapPin size={17} className="mt-1 shrink-0"/>Jambi, Indonesia</p><a href="https://wa.me/6285805491800" target="_blank" rel="noreferrer" className="text-muted mt-2 flex items-center gap-2 text-sm">+62 858-0549-1800 <ArrowUpRight size={14}/></a><a href="mailto:webcraftstudio@gmail.com" className="text-muted mt-2 flex items-center gap-2 text-sm">webcraftstudio@gmail.com <ArrowUpRight size={14}/></a></div>
      </div>
      <div className="border-theme border-t"><div className="container-page flex flex-col justify-between gap-2 py-5 text-xs text-muted sm:flex-row"><span>© {new Date().getFullYear()} WebCraft Studio. All rights reserved.</span><span>Designed for growing businesses.</span></div></div>
    </footer>
  );
}
