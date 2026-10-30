"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/content";

export default function FAQPage() {
 const [active,setActive] = useState<number|null>(0);
 return <div className="container-page section-space"><SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering diajukan." description="Informasi singkat untuk membantu Anda memahami layanan dan proses kerja WebCraft Studio." centered/><div className="mx-auto mt-12 max-w-3xl">{faqs.map((f,i)=><div key={f.q} className="border-theme border-b"><button onClick={()=>setActive(active===i?null:i)} className="flex w-full items-center justify-between gap-5 py-6 text-left font-bold"><span>{f.q}</span><ChevronDown className={`shrink-0 text-primary transition ${active===i?"rotate-180":""}`} size={20}/></button>{active===i&&<p className="text-muted max-w-2xl pb-6 text-sm leading-7">{f.a}</p>}</div>)}</div></div>;
}
