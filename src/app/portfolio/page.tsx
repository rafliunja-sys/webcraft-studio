"use client";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/content";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Semua");
  const categories = ["Semua", ...Array.from(new Set(projects.map(p=>p.category)))];
  const visible = useMemo(()=>filter==="Semua"?projects:projects.filter(p=>p.category===filter),[filter]);
  return <div className="container-page section-space"><SectionHeading eyebrow="Our portfolio" title="Ide yang diterjemahkan menjadi pengalaman digital." description="Berikut adalah contoh konsep proyek untuk menunjukkan variasi pendekatan desain kami."/><div className="mt-9 flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${filter===c?"border-transparent bg-primary text-[#062b29]":"border-theme hover:border-primary"}`}>{c}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="text-muted mt-7 text-xs">Catatan: seluruh item di halaman ini merupakan demo project, bukan klaim proyek klien yang telah dikerjakan.</p></div>;
}
