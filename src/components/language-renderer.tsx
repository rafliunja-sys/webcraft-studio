
"use client";

import { useEffect } from "react";

const translations: Record<string, string> = {
  "Beranda": "Home",
  "Layanan": "Services",
  "Portofolio": "Portfolio",
  "Tentang Kami": "About Us",
  "Harga": "Pricing",
  "Kontak": "Contact",
  "Konsultasi": "Get a quote",
  "Mulai Konsultasi": "Start a consultation",
  "Lihat Demo Website": "View website demos",
  "Semua portofolio": "All projects",
  "Jelajahi semua layanan": "Explore all services",
  "Diskusikan Proyek": "Discuss your project",
  "Hubungi Kami": "Contact us",
  "Navigasi": "Navigation",
  "Bangun Website Profesional untuk Bisnis": "Build a professional website for your business",
  "Kami membantu UMKM dan bisnis kecil tampil lebih meyakinkan, menjangkau pelanggan, dan berkembang di dunia digital.": "We help small businesses build credibility, reach more customers, and grow in the digital world.",
  "lebih profesional.": "more professional.",
  "mudah ditemukan.": "easier to find.",
  "siap berkembang.": "ready to grow.",
  "Digital presence for growing businesses": "Digital presence for growing businesses",
  "Desain responsif": "Responsive design",
  "Demo website custom": "Custom website demos",
  "Fokus kebutuhan bisnis": "Focused on business needs",
  "Preview konsep website": "Website concept preview",
  "Jelajahi website": "Explore website",
  "BERANDA": "HOME",
  "PRODUK": "PRODUCTS",
  "TENTANG": "ABOUT",
  "KONTAK": "CONTACT",
  "MENU": "MENU",
  "Desain menarik": "Engaging design",
  "Mudah digunakan": "Easy to use",
  "Siap berkembang": "Ready to grow",
  "Custom website concept": "Custom website concept",
  "Solusi digital yang berangkat dari kebutuhan nyata.": "Digital solutions built around real needs.",
  "Pahami kebutuhan": "Understand the needs",
  "Menentukan tujuan dan audiens website.": "Define the website's goals and audience.",
  "Rancang pengalaman": "Design the experience",
  "Menyusun tampilan dan alur yang mudah digunakan.": "Create an intuitive layout and user journey.",
  "Bangun dan kembangkan": "Build and improve",
  "Mewujudkan website yang siap mendukung bisnis.": "Deliver a website that supports business growth.",
  "Layanan yang membantu bisnis tampil lebih kuat.": "Services that help your business stand out.",
  "Pilih solusi website sesuai tahap dan kebutuhan bisnis Anda.": "Choose a website solution that fits your business needs and stage.",
  "Website Company Profile": "Company Profile Website",
  "Website Katalog Produk": "Product Catalog Website",
  "Landing Page": "Landing Page",
  "Website Custom": "Custom Website",
  "Tampilkan identitas, layanan, dan keunggulan bisnis dalam website yang profesional.": "Showcase your business identity, services, and strengths through a professional website.",
  "Perkenalkan produk dengan katalog digital yang rapi dan mudah dijelajahi.": "Present your products in a clear, easy-to-explore digital catalog.",
  "Halaman promosi yang fokus mengarahkan pengunjung pada satu tindakan utama.": "A campaign page designed to guide visitors toward one clear action.",
  "Solusi website yang disesuaikan dengan kebutuhan dan alur kerja bisnis.": "A website tailored to your business needs and workflows.",
  "Contoh karya dan eksplorasi kami.": "Selected work and design explorations.",
  "Lihat beberapa konsep website yang menggambarkan pendekatan desain WebCraft Studio.": "Explore website concepts that demonstrate the WebCraft Studio design approach.",
  "Bukan hanya terlihat bagus. Harus bekerja untuk bisnis.": "More than good looks. Designed to work for your business.",
  "Kami memadukan desain, struktur informasi, dan kebutuhan pengguna dalam satu pengalaman digital.": "We combine design, information architecture, and user needs in one digital experience.",
  "Mari wujudkan website yang tepat untuk bisnis Anda.": "Let's build the right website for your business.",
  "Ceritakan kebutuhan bisnis Anda. Kami bantu merancang langkah digital yang masuk akal.": "Tell us what your business needs. We'll help plan a practical digital solution.",
  "Website yang dirancang untuk kebutuhan bisnis Anda.": "Websites designed around your business needs.",
  "Mulai dari memperkenalkan brand hingga menampilkan produk secara digital. Pilih layanan yang paling sesuai.": "From introducing your brand to showcasing products online, choose the service that fits best.",
  "Perencanaan struktur halaman": "Page structure planning",
  "Optimasi pengalaman pengguna": "User experience optimization",
  "Konsultasikan layanan": "Discuss this service",
  "Catatan: seluruh item di halaman ini merupakan demo project, bukan klaim proyek klien yang telah dikerjakan.": "Note: all items on this page are demo concepts, not claims of completed client projects.",
  "Ide yang diterjemahkan menjadi pengalaman digital.": "Ideas translated into digital experiences.",
  "Berikut adalah contoh konsep proyek untuk menunjukkan variasi pendekatan desain kami.": "These project concepts demonstrate our range of design approaches.",
  "Semua": "All",
  "Kembali ke portofolio": "Back to portfolio",
  "Project overview": "Project overview",
  "Tentang proyek ini": "About this project",
  "Fokus rancangan": "Design focus",
  "Identitas visual yang konsisten": "Consistent visual identity",
  "Informasi bisnis yang mudah ditemukan": "Easy-to-find business information",
  "Tampilan responsif untuk berbagai perangkat": "Responsive across devices",
  "Jalur komunikasi yang jelas": "Clear communication paths",
  "Kategori": "Category",
  "Buat proyek serupa": "Start a similar project",
  "Membantu bisnis lokal mengambil langkah lebih percaya diri di dunia digital.": "Helping local businesses take confident steps in the digital world.",
  "WebCraft Studio adalah konsep layanan pengembangan website yang berfokus pada UMKM dan bisnis kecil. Kami percaya website yang baik harus memiliki tujuan, mudah digunakan, dan relevan dengan kebutuhan penggunanya.": "WebCraft Studio is a website development service concept focused on small businesses. We believe a good website should have a clear purpose, be easy to use, and meet its audience's needs.",
  "Visi dan misi": "Vision and mission",
  "Arah yang menjadi dasar pengembangan layanan WebCraft Studio.": "The direction that guides WebCraft Studio's services.",
  "Menjadi mitra digital yang membantu bisnis kecil berkembang melalui teknologi website.": "To become a digital partner helping small businesses grow through website technology.",
  "Berorientasi tujuan": "Goal-oriented",
  "Setiap keputusan desain dan fitur harus mendukung tujuan bisnis.": "Every design and feature decision should support business goals.",
  "Solutif dan adaptif": "Practical and adaptable",
  "Mencari pendekatan yang sesuai dengan kebutuhan dan kapasitas usaha.": "Finding an approach that fits each business's needs and capacity.",
  "Kolaboratif": "Collaborative",
  "Membangun komunikasi yang terbuka selama proses pengerjaan.": "Maintaining open communication throughout the project.",
  "Terarah": "Structured",
  "Bekerja melalui tahapan yang jelas dari perencanaan hingga peluncuran.": "Following clear steps from planning through launch.",
  "Punya ide untuk bisnis Anda?": "Have an idea for your business?",
  "Mari diskusikan kebutuhan website yang ingin diwujudkan.": "Let's discuss the website you have in mind.",
  "Hubungi WebCraft": "Contact WebCraft",
  "Pilih titik awal yang sesuai dengan bisnis Anda.": "Choose the right starting point for your business.",
  "Estimasi harga berikut merupakan rancangan paket awal. Penawaran final ditentukan setelah kebutuhan dan ruang lingkup proyek disepakati.": "These prices are initial estimates. A final quote will be prepared after we agree on your needs and project scope.",
  "Pilihan bisnis": "Popular choice",
  "Harga estimasi, bukan penawaran final": "Estimated price, not a final quote",
  "Diskusikan paket": "Discuss this package",
  "Termasuk": "Included",
  "Landing page responsif": "Responsive landing page",
  "Struktur konten dasar": "Basic content structure",
  "Tombol WhatsApp": "WhatsApp button",
  "Formulir kontak sederhana": "Simple contact form",
  "Optimasi dasar": "Basic optimization",
  "Hingga beberapa halaman sesuai kesepakatan": "Multiple pages as agreed",
  "Galeri atau katalog sederhana": "Simple gallery or catalog",
  "Formulir konsultasi": "Consultation form",
  "SEO dasar": "Basic SEO",
  "Analisis kebutuhan khusus": "Custom requirements analysis",
  "Desain sesuai brand": "Brand-aligned design",
  "Fitur berdasarkan kesepakatan": "Features as agreed",
  "Integrasi layanan pihak ketiga": "Third-party service integrations",
  "Rencana pengembangan": "Development roadmap",
  "Domain, hosting, biaya layanan eksternal, konten khusus, dan pemeliharaan dapat memiliki biaya terpisah sesuai kesepakatan.": "Domain, hosting, external services, custom content, and maintenance may incur additional costs as agreed.",
  "Pertanyaan yang sering diajukan.": "Frequently asked questions.",
  "Informasi singkat untuk membantu Anda memahami layanan dan proses kerja WebCraft Studio.": "Quick answers to help you understand WebCraft Studio's services and workflow.",
  "Berapa lama proses pembuatan website?": "How long does it take to build a website?",
  "Durasi bergantung pada kompleksitas, jumlah halaman, dan kesiapan materi. Estimasi waktu dibahas setelah kebutuhan proyek dipahami.": "Timing depends on complexity, page count, and content readiness. We provide an estimate after understanding the project requirements.",
  "Apakah website bisa dibuka melalui HP?": "Will the website work on mobile phones?",
  "Ya. Website dirancang responsif agar dapat digunakan melalui smartphone, tablet, maupun desktop.": "Yes. Websites are designed to work across smartphones, tablets, and desktop devices.",
  "Apakah saya perlu menyiapkan domain dan hosting?": "Do I need to provide a domain and hosting?",
  "Kebutuhan domain dan hosting akan dibahas saat konsultasi. Kami dapat membantu menjelaskan pilihan yang sesuai dengan kebutuhan bisnis.": "We'll discuss domain and hosting during consultation and explain the options that fit your business.",
  "Apakah tersedia revisi?": "Are revisions included?",
  "Ruang lingkup dan jumlah revisi disepakati di awal agar proses pengerjaan berjalan jelas bagi kedua pihak.": "The scope and number of revisions are agreed at the start so expectations are clear.",
  "Apakah website dapat dikembangkan lagi?": "Can the website be expanded later?",
  "Bisa. Struktur website dapat direncanakan agar memungkinkan penambahan fitur sesuai perkembangan bisnis.": "Yes. The website can be planned to support new features as your business grows.",
  "Ceritakan website yang ingin Anda bangun.": "Tell us about the website you want to build.",
  "Berikan gambaran kebutuhan bisnis Anda. Kami akan menghubungi untuk membahas langkah berikutnya.": "Tell us what your business needs. We'll get in touch to discuss the next steps.",
  "Mari mulai percakapan.": "Let's start a conversation.",
  "Pilih jalur komunikasi yang paling nyaman untuk Anda.": "Choose the contact method that works best for you.",
  "Klik untuk membuka chat": "Click to open chat",
  "Klik untuk mengirim email": "Click to send an email",
  "Kolom bertanda * wajib diisi.": "Fields marked * are required.",
  "Nama lengkap *": "Full name *",
  "Nama Anda": "Your name",
  "Nomor WhatsApp *": "WhatsApp number *",
  "Layanan yang dibutuhkan": "Service needed",
  "Estimasi anggaran": "Estimated budget",
  "Pilih estimasi": "Select an estimate",
  "Di bawah Rp3 juta": "Under IDR 3 million",
  "Rp3–5 juta": "IDR 3–5 million",
  "Rp5–10 juta": "IDR 5–10 million",
  "Di atas Rp10 juta": "Over IDR 10 million",
  "Ingin konsultasi dahulu": "I'd like to discuss first",
  "Ceritakan kebutuhan website *": "Tell us what you need *",
  "Ceritakan jenis bisnis, tujuan website, atau fitur yang dibutuhkan...": "Describe your business, website goals, or required features...",
  "Kirim Permintaan Konsultasi": "Send consultation request",
  "Mengirim...": "Sending...",
  "Data digunakan untuk menindaklanjuti permintaan konsultasi Anda.": "Your information will be used to follow up on your consultation request.",
  "Membantu UMKM dan bisnis kecil membangun kehadiran digital melalui website yang profesional, fungsional, dan mudah digunakan.": "Helping small businesses build a professional, functional, and user-friendly online presence.",
  "Lokasi": "Location",
  "Jambi, Indonesia": "Jambi, Indonesia",
  "Semua hak dilindungi.": "All rights reserved.",
  "Dirancang untuk bisnis yang terus berkembang.": "Designed for growing businesses.",
  "Konsep website untuk kedai kopi dengan menu, cerita brand, dan informasi lokasi.": "A coffee shop website concept featuring its menu, brand story, and location details.",
  "Katalog digital untuk bisnis tanaman dan dekorasi rumah.": "A digital catalog concept for a plant and home decor business.",
  "Landing page promosi untuk layanan kreatif dan produk lokal.": "A promotional landing page concept for creative services and local products.",
  "Website profil usaha kuliner dengan highlight menu dan pemesanan.": "A culinary business website concept highlighting its menu and ordering options.",
  "Katalog koleksi fashion lokal dengan tampilan editorial.": "A local fashion collection catalog with an editorial look.",
  "Landing page layanan perawatan dengan informasi paket dan konsultasi.": "A service landing page featuring packages and consultation information.",
  "Konsep ini dibuat untuk memperlihatkan bagaimana struktur informasi, visual, dan ajakan bertindak dapat disusun sesuai karakter bisnis.": "This concept demonstrates how information structure, visuals, and calls to action can be tailored to a business."
};

const reverseTranslations: Record<string, string> = Object.fromEntries(
  Object.entries(translations).map(([id, en]) => [en, id])
);

const indonesianOverrides: Record<string, string> = {
  "Digital presence for growing businesses": "Kehadiran digital untuk bisnis yang berkembang",
  "Custom website concept": "Konsep website khusus",
  "Cafe website": "Website kedai kopi",
  "UMKM catalog": "Katalog UMKM",
  "Fashion store": "Toko fashion",
  "Restaurant website": "Website restoran",
  "COFFEE & CAFE": "KOPI & KAFE",
  "PLANT & LIFESTYLE": "TANAMAN & GAYA HIDUP",
  "LOCAL FASHION": "FASHION LOKAL",
  "CULINARY BUSINESS": "BISNIS KULINER",
  "Explore website": "Jelajahi website",
  "Engaging design": "Desain menarik",
  "Easy to use": "Mudah digunakan",
  "Ready to grow": "Siap berkembang",
  "Website concept preview": "Pratinjau konsep website",
  "Responsive design": "Desain responsif",
  "Custom website demos": "Demo website khusus",
  "Focused on business needs": "Berfokus pada kebutuhan bisnis",
  "Start a consultation": "Mulai konsultasi",
  "View website demos": "Lihat demo website",
  "Built for business": "Dirancang untuk bisnis",
  "What we do": "Layanan kami",
  "Selected work": "Karya pilihan",
  "Why WebCraft": "Mengapa WebCraft",
  "Ready when you are": "Siap saat Anda",
  "Our services": "Layanan kami",
  "Our portfolio": "Portofolio kami",
  "Pricing plans": "Paket harga",
  "Let's talk": "Mari berbincang",
  "Contact information": "Informasi kontak",
  "SERVICE": "LAYANAN",
  "Food & Beverage": "Makanan & Minuman",
  "Lifestyle": "Gaya hidup",
  "Creative": "Kreatif",
  "Culinary": "Kuliner",
  "Company Profile": "Profil Perusahaan",
  "Product Catalog": "Katalog Produk",
  "Demo project": "Proyek demo",
  "Popular choice": "Pilihan populer",
  "Included": "Termasuk",
  "Location": "Lokasi",
  "Project overview": "Ringkasan proyek",
  "Back to portfolio": "Kembali ke portofolio",
  "About this project": "Tentang proyek ini",
  "Design focus": "Fokus rancangan",
  "Have an idea for your business?": "Punya ide untuk bisnis Anda?",
  "Vision and mission": "Visi dan misi",
  "Our values": "Nilai-nilai kami",
  "Estimated budget": "Perkiraan anggaran",
  "Choose an estimate": "Pilih perkiraan",
  "Below IDR 3 million": "Di bawah Rp3 juta",
  "Above IDR 10 million": "Di atas Rp10 juta",
  "I would like a consultation first": "Ingin konsultasi terlebih dahulu",
  "Tell us about your business, website goals, or required features...": "Ceritakan jenis bisnis, tujuan website, atau fitur yang dibutuhkan...",
  "Click to open chat": "Klik untuk membuka chat",
  "Click to send an email": "Klik untuk mengirim email",
  "Chat via WhatsApp": "Chat melalui WhatsApp",
  "Send consultation request": "Kirim permintaan konsultasi",
  "DIGITAL STUDIO": "STUDIO DIGITAL",
  "All rights reserved.": "Seluruh hak dilindungi.",
  "Designed for growing businesses.": "Dirancang untuk bisnis yang terus berkembang.",
  "Brand presence": "Identitas merek",
  "Product showcase": "Etalase produk",
  "Campaign": "Kampanye",
  "Tailored solution": "Solusi khusus",
  "COMPANY PROFILE": "PROFIL PERUSAHAAN",
  "PRODUCT CATALOG": "KATALOG PRODUK",
  "Services": "Layanan",
  "Portfolio": "Portofolio",
  "About": "Tentang Kami",
  "Pricing": "Harga",
  "Contact": "Kontak",
  "Home": "Beranda",
  "Get a quote": "Minta penawaran",
  "Page structure planning": "Perencanaan struktur halaman",
  "User experience optimization": "Optimalisasi pengalaman pengguna",
  "Responsive landing page": "Landing page responsif",
  "Basic content structure": "Struktur konten dasar",
  "Simple contact form": "Formulir kontak sederhana",
  "Basic optimization": "Optimasi dasar",
  "Simple gallery or catalog": "Galeri atau katalog sederhana",
  "Consultation form": "Formulir konsultasi",
  "Custom requirements analysis": "Analisis kebutuhan khusus",
  "Brand-aligned design": "Desain sesuai identitas merek",
  "Features as agreed": "Fitur sesuai kesepakatan",
  "Third-party service integrations": "Integrasi layanan pihak ketiga",
  "Development roadmap": "Peta jalan pengembangan"
};

const originalTexts = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();

function isExcluded(node: Node): boolean {
  const element =
    node instanceof Element ? node : node.parentElement;

  return Boolean(
    element?.closest('[translate="no"], [data-no-translate]')
  );
}

export function LanguageRenderer({
  language
}: {
  language: "id" | "en";
}) {
  useEffect(() => {
    const translateNode = (node: Node) => {
      if (isExcluded(node)) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node as Text;
        const current = text.nodeValue ?? "";

        const original = originalTexts.get(text) ?? current;

        if (!originalTexts.has(text)) {
          originalTexts.set(text, original);
        }

        const trimmed = original.trim();

        const translated =
          language === "en"
            ? translations[trimmed] ?? original
            : indonesianOverrides[trimmed] ??
              reverseTranslations[trimmed] ??
              original;

        const leading = original.match(/^\s*/)?.[0] ?? "";
        const trailing = original.match(/\s*$/)?.[0] ?? "";

        const next = leading + translated.trim() + trailing;

        if (text.nodeValue !== next) {
          text.nodeValue = next;
        }

        return;
      }

      if (node instanceof Element) {
        for (const name of ["placeholder", "aria-label", "title"]) {
          const value = node.getAttribute(name);

          if (!value) continue;

          let map = originalAttributes.get(node);

          if (!map) {
            map = new Map();
            originalAttributes.set(node, map);
          }

          if (!map.has(name)) {
            map.set(name, value);
          }

          const original = map.get(name)!;

          const next =
            language === "en"
              ? translations[original] ?? original
              : indonesianOverrides[original] ??
                reverseTranslations[original] ??
                original;

          if (value !== next) {
            node.setAttribute(name, next);
          }
        }

        node.childNodes.forEach(translateNode);
      }
    };

    const apply = () => {
      document.body.childNodes.forEach(translateNode);
    };

    apply();

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (isExcluded(record.target)) return;

        record.addedNodes.forEach(translateNode);

        if (record.type === "characterData") {
          translateNode(record.target);
        }
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, [language]);

  return null;
}
