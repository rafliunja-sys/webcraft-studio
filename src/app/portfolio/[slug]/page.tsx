import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/content";

export function generateStaticParams() { return projects.map(p=>({slug:p.slug})); }
export default async function ProjectDetailPage({ params }: { params: Promise<{slug:string}> }) {
  const {slug} = await params;
  const project = projects.find(p=>p.slug===slug);
  if (!project) notFound();
  return <div className="container-page section-space">
    <Link href="/portfolio" className="text-muted inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft size={16}/> Kembali ke portofolio</Link>
    <div className={`mt-8 grid min-h-[330px] place-items-center rounded-3xl bg-gradient-to-br ${project.color} p-8`}>
      <div className="w-full max-w-xl rounded-2xl border border-white/60 bg-white/90 p-7 text-slate-900 shadow-2xl"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-rose-400"/><i className="h-2.5 w-2.5 rounded-full bg-amber-400"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div><p className="mt-10 text-xs font-bold uppercase tracking-widest text-teal-700">{project.category}</p><h1 className="mt-3 text-4xl font-black">{project.name}</h1><p className="mt-3 max-w-md text-sm leading-6 text-slate-500">{project.description}</p><div className="mt-6 h-2 w-28 rounded bg-teal-500"/></div>
    </div>
    <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_.6fr]"><div><p className="eyebrow">Project overview</p><h2 className="mt-3 text-3xl font-bold">Tentang proyek ini</h2><p className="text-muted mt-4 leading-8">{project.description} Konsep ini dibuat untuk memperlihatkan bagaimana struktur informasi, visual, dan ajakan bertindak dapat disusun sesuai karakter bisnis.</p><h3 className="mt-8 text-xl font-bold">Fokus rancangan</h3><ul className="text-muted mt-4 grid gap-3 text-sm">{["Identitas visual yang konsisten","Informasi bisnis yang mudah ditemukan","Tampilan responsif untuk berbagai perangkat","Jalur komunikasi yang jelas"].map(x=><li key={x} className="flex gap-2"><CheckCircle2 className="text-primary" size={18}/>{x}</li>)}</ul></div><aside className="card h-fit p-6"><span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold text-primary">{project.status}</span><h3 className="mt-5 text-xl font-bold">{project.name}</h3><p className="text-muted mt-2 text-sm">{project.type}</p><div className="border-theme my-5 border-t"/><p className="text-muted text-xs">Kategori</p><p className="mt-1 font-semibold">{project.category}</p><Link href="/contact" className="btn-primary mt-7 w-full">Buat proyek serupa <ArrowUpRight size={16}/></Link></aside></div>
  </div>;
}
