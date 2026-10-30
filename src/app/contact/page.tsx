
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);

  const number = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285805491800"
  ).replace(/\D/g, "");

  const email = "webcraftstudio@gmail.com";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      full_name: String(form.get("name") || "").trim(),
      whatsapp: String(form.get("whatsapp") || "").trim(),
      service: String(form.get("service") || ""),
      budget: String(form.get("budget") || ""),
      message: String(form.get("message") || "").trim(),
    };

    if (
      !payload.full_name ||
      !payload.whatsapp ||
      payload.message.length < 10
    ) {
      setStatusType("error");
      setStatus("Mohon lengkapi nama, WhatsApp, dan pesan dengan benar.");
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const { error } = await supabase
        .from("consultations")
        .insert([payload]);

      if (error) {
        console.error("SUPABASE ERROR DETAIL:", {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });

        setStatusType("error");
        setStatus(
          `Gagal mengirim: ${error.message || error.code || "Terjadi kesalahan pada database."}`
        );
        return;
      }

      formElement.reset();
      setStatusType("success");
      setStatus("Terima kasih! Pesan konsultasi berhasil dikirim.");
    } catch (error) {
      console.error("CONSULTATION SUBMISSION ERROR:", error);

      setStatusType("error");
      setStatus(
        error instanceof Error
          ? `Terjadi kesalahan: ${error.message}`
          : "Terjadi kesalahan koneksi. Silakan coba kembali."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-page section-space">
      <SectionHeading
        eyebrow="Let's talk"
        title="Ceritakan website yang ingin Anda bangun."
        description="Berikan gambaran kebutuhan bisnis Anda. Kami akan menghubungi untuk membahas langkah berikutnya."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <aside className="hero-orb h-fit rounded-3xl p-7 text-white sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Contact information
          </p>

          <h2 className="mt-4 text-2xl font-bold">
            Mari mulai percakapan.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Pilih jalur komunikasi yang paling nyaman untuk Anda.
          </p>

          <div className="mt-9 grid gap-6 text-sm">
            <a
              href={`https://wa.me/${number}`}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 transition hover:opacity-80"
            >
              <MessageCircle className="text-teal-300" size={20} />
              <div>
                <b>WhatsApp</b>
                <p className="mt-1 text-slate-300">
                  +62 858-0549-1800
                </p>
                <span className="mt-1 inline-block text-xs text-teal-300">
                  Klik untuk membuka chat
                </span>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex gap-3 transition hover:opacity-80"
            >
              <Mail className="text-teal-300" size={20} />
              <div>
                <b>Email</b>
                <p className="mt-1 break-all text-slate-300">
                  {email}
                </p>
                <span className="mt-1 inline-block text-xs text-teal-300">
                  Klik untuk mengirim email
                </span>
              </div>
            </a>

            <div className="flex gap-3">
              <MapPin className="text-teal-300" size={20} />
              <div>
                <b>Lokasi</b>
                <p className="mt-1 text-slate-300">
                  Jambi, Indonesia
                </p>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${number}?text=${encodeURIComponent(
              "Halo WebCraft Studio, saya ingin konsultasi."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-9 flex items-center justify-center gap-2 rounded-xl bg-[#20c66b] px-4 py-3 font-bold text-white"
          >
            Chat via WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="card p-6 sm:p-9"
        >
          <h2 className="text-xl font-bold">
            Formulir konsultasi
          </h2>

          <p className="text-muted mt-2 text-sm">
            Kolom bertanda * wajib diisi.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Nama lengkap *
              <input
                className="input"
                name="name"
                placeholder="Nama Anda"
                required
                minLength={2}
                maxLength={100}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Nomor WhatsApp *
              <input
                className="input"
                name="whatsapp"
                placeholder="08xxxxxxxxxx"
                required
                minLength={8}
                maxLength={25}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Layanan yang dibutuhkan
              <select
                className="input"
                name="service"
                defaultValue="Website Company Profile"
              >
                <option>Website Company Profile</option>
                <option>Website Katalog Produk</option>
                <option>Landing Page</option>
                <option>Website Custom</option>
                <option>Belum yakin</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Estimasi anggaran
              <select
                className="input"
                name="budget"
                defaultValue=""
              >
                <option value="">Pilih estimasi</option>
                <option>Di bawah Rp3 juta</option>
                <option>Rp3–5 juta</option>
                <option>Rp5–10 juta</option>
                <option>Di atas Rp10 juta</option>
                <option>Ingin konsultasi dahulu</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              Ceritakan kebutuhan website *
              <textarea
                className="input min-h-32 resize-y"
                name="message"
                placeholder="Ceritakan jenis bisnis, tujuan website, atau fitur yang dibutuhkan..."
                required
                minLength={10}
                maxLength={2000}
              />
            </label>
          </div>

          {status && (
            <p
              role="status"
              className={`mt-5 flex items-start gap-2 rounded-xl p-3 text-sm ${
                statusType === "success"
                  ? "bg-emerald-500/10 text-emerald-600"
                  : "bg-red-500/10 text-red-500"
              }`}
            >
              <CheckCircle2
                className="mt-0.5 shrink-0"
                size={17}
              />
              <span>{status}</span>
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Mengirim..."
              : "Kirim Permintaan Konsultasi"}
            <ArrowUpRight size={17} />
          </button>

          <p className="text-muted mt-3 text-center text-[11px]">
            Data digunakan untuk menindaklanjuti permintaan konsultasi Anda.
          </p>
        </form>
      </div>
    </div>
  );
}
