import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export default function ServicesPage() {
  return <div className="container-page section-space"><SectionHeading eyebrow="Our services" title="Website yang dirancang untuk kebutuhan bisnis Anda." description="Mulai dari memperkenalkan brand hingga menampilkan produk secara digital. Pilih layanan yang paling sesuai." centered/><div className="mt-14 grid gap-5 md:grid-cols-2">{services.map((s,i)=><article key={s.title} className="card p-7 sm:p-9"><div className="flex items-center justify-between"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface-soft)] text-primary"><s.icon size={26}/></div><span className="text-muted text-xs font-bold">0{i+1} / SERVICE</span></div><p className="eyebrow mt-7">{s.tag}</p><h2 className="mt-2 text-2xl font-bold">{s.title}</h2><p className="text-muted mt-3 leading-7">{s.description}</p><ul className="text-muted mt-5 grid gap-2 text-sm">{["Perencanaan struktur halaman","Desain responsif","Optimasi pengalaman pengguna"].map(x=><li key={x} className="flex items-center gap-2"><Check size={15} className="text-primary"/>{x}</li>)}</ul><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Konsultasikan layanan <ArrowUpRight size={16}/></Link></article>)}</div></div>;
}
