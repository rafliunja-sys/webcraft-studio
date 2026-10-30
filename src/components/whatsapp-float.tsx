"use client";
import { MessageCircle } from "lucide-react";
export function WhatsAppFloat() {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285805491800").replace(/\D/g, "");
  const message = encodeURIComponent("Halo WebCraft Studio, saya ingin berkonsultasi mengenai pembuatan website.");
  return <a href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#20c66b] text-white shadow-xl transition hover:scale-105"><MessageCircle size={25}/></a>;
}
