import type { Metadata } from "next";
import "./globals.css";
import { SiteProviders } from "@/components/site-providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "WebCraft Studio | Website Profesional untuk Bisnis",
  description: "Solusi website profesional untuk UMKM dan bisnis kecil. Bangun kehadiran digital bisnis Anda bersama WebCraft Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <SiteProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SiteProviders>
      </body>
    </html>
  );
}
