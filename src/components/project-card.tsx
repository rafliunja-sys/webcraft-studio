import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = { slug: string; name: string; category: string; type: string; description: string; color: string; initials: string; status: string };
export function ProjectCard({ project }: { project: Project }) {
  return <Link href={`/portfolio/${project.slug}`} className="card group overflow-hidden focus-visible:outline-offset-4">
    <div className={`relative grid aspect-[1.55] place-items-center bg-gradient-to-br ${project.color}`}>
      <div className="w-[72%] rounded-xl border border-white/60 bg-white/85 p-3 shadow-2xl backdrop-blur">
        <div className="mb-3 flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-rose-400"/><i className="h-2 w-2 rounded-full bg-amber-400"/><i className="h-2 w-2 rounded-full bg-emerald-400"/><div className="ml-3 h-2 w-1/3 rounded bg-slate-200"/></div>
        <div className="grid grid-cols-[1fr_.8fr] gap-2"><div><div className="h-3 w-4/5 rounded bg-slate-700"/><div className="mt-2 h-2 w-full rounded bg-slate-200"/><div className="mt-1 h-2 w-3/4 rounded bg-slate-200"/><div className="mt-3 h-5 w-14 rounded bg-teal-500"/></div><div className="rounded-lg bg-slate-200 p-2"><div className="h-full rounded bg-gradient-to-br from-teal-200 to-slate-300"/></div></div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold text-slate-700">{project.status}</span>
    </div>
    <div className="p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-primary text-xs font-bold">{project.category}</p><h3 className="mt-1 text-lg font-bold">{project.name}</h3></div><span className="rounded-full border border-theme p-2 transition group-hover:bg-primary group-hover:text-[#062b29]"><ArrowUpRight size={17}/></span></div><p className="text-muted mt-3 text-sm leading-6">{project.description}</p></div>
  </Link>;
}
