import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroShowcase } from "@/components/hero-showcase";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { benefits, projects, services } from "@/data/content";

export default function HomePage() {
  return <>
    <HeroShowcase />

    <section className="container-page py-12 sm:py-16"><div className="grid gap-6 rounded-2xl border border-theme p-6 sm:grid-cols-3 sm:p-8"><div><p className="eyebrow">Built for business</p><h2 className="mt-2 text-xl font-bold">Solusi digital yang berangkat dari kebutuhan nyata.</h2></div>{[{n:"01",t:"Pahami kebutuhan",d:"Menentukan tujuan dan audiens website."},{n:"02",t:"Rancang pengalaman",d:"Menyusun tampilan dan alur yang mudah digunakan."},{n:"03",t:"Bangun dan kembangkan",d:"Mewujudkan website yang siap mendukung bisnis."}].map(x=><div key={x.n} className="border-l border-theme pl-5"><span className="text-primary text-xs font-black">{x.n}</span><h3 className="mt-2 font-bold">{x.t}</h3><p className="text-muted mt-1 text-sm leading-6">{x.d}</p></div>)}</div></section>

    <section className="container-page section-space"><SectionHeading eyebrow="What we do" title="Layanan yang membantu bisnis tampil lebih kuat." description="Pilih solusi website sesuai tahap dan kebutuhan bisnis Anda."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s)=><div className="card p-6" key={s.title}><div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--surface-soft)] text-primary"><s.icon size={23}/></div><p className="text-primary mt-6 text-[10px] font-bold uppercase tracking-widest">{s.tag}</p><h3 className="mt-2 text-lg font-bold">{s.title}</h3><p className="text-muted mt-3 text-sm leading-6">{s.description}</p></div>)}</div><div className="mt-7"><Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Jelajahi semua layanan <ArrowRight size={16}/></Link></div></section>

    <section className="surface-soft py-20"><div className="container-page"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow="Selected work" title="Contoh karya dan eksplorasi kami." description="Lihat beberapa konsep website yang menggambarkan pendekatan desain WebCraft Studio."/><Link href="/portfolio" className="btn-secondary">Semua portofolio <ArrowUpRight size={16}/></Link></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0,3).map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section>

    <section className="container-page section-space"><SectionHeading eyebrow="Why WebCraft" title="Bukan hanya terlihat bagus. Harus bekerja untuk bisnis." description="Kami memadukan desain, struktur informasi, dan kebutuhan pengguna dalam satu pengalaman digital."/><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((b)=><div key={b.title} className="card p-6"><b.icon className="text-primary" size={25}/><h3 className="mt-5 font-bold">{b.title}</h3><p className="text-muted mt-2 text-sm leading-6">{b.description}</p></div>)}</div></section>

    <section className="container-page pb-24"><div className="hero-orb overflow-hidden rounded-3xl px-7 py-14 text-center text-white sm:px-14"><p className="eyebrow !text-teal-300">Ready when you are</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Mari wujudkan website yang tepat untuk bisnis Anda.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">Ceritakan kebutuhan bisnis Anda. Kami bantu merancang langkah digital yang masuk akal.</p><Link href="/contact" className="btn-primary mt-8">Diskusikan Proyek <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
