# WebCraft Studio

Website company profile bilingual (Bahasa Indonesia / English) untuk layanan pembuatan website bagi UMKM dan bisnis kecil.

## Teknologi
- Next.js App Router + TypeScript
- Tailwind CSS v4
- Supabase untuk menyimpan permintaan konsultasi (opsional sampai dikonfigurasi)
- Vercel untuk deployment

## Menjalankan secara lokal
Gunakan Node.js versi LTS yang masih didukung.

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk memeriksa build produksi:

```bash
npm run lint
npm run build
npm start
```

## Bahasa dan tema
- Pengunjung dapat memilih Bahasa Indonesia atau English dari navigasi.
- Pilihan bahasa dan tema disimpan pada localStorage browser.
- Bahasa default: Indonesia. Tema default: Light.

## Konfigurasi Supabase (dilakukan pemilik proyek)
1. Buat project di Supabase.
2. Buka **SQL Editor** pada dashboard Supabase.
3. Jalankan seluruh isi `supabase/schema.sql`.
4. Salin `.env.example` menjadi `.env.local`.
5. Isi variabel berikut dari **Project Settings > API**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
NEXT_PUBLIC_WHATSAPP_NUMBER=6285805491800
```

6. Hentikan server dengan Ctrl+C, lalu jalankan kembali `npm run dev`.
7. Kirim satu permintaan uji melalui halaman Kontak. Periksa tabel `public.consultations` di Supabase Table Editor.

**Keamanan:** gunakan hanya publishable/anon key pada variabel `NEXT_PUBLIC_`. Jangan pernah memasukkan `service_role` key ke frontend, `.env.local` yang di-commit, GitHub, atau Vercel client variables. RLS aktif; pengunjung hanya diberi izin INSERT dan tidak diberi izin SELECT/UPDATE/DELETE. Akses membaca data dilakukan melalui dashboard Supabase oleh pemilik project.

Sebelum menerima data publik dalam skala besar, tambahkan perlindungan spam/rate limiting atau CAPTCHA dan siapkan kebijakan privasi yang sesuai. Validasi di browser bukan pengganti validasi server/database.

Jika Supabase belum dikonfigurasi, formulir menampilkan status demo dan tidak menyimpan data.

## Kontak
- WhatsApp: +62 858-0549-1800
- Email: webcraftstudio@gmail.com
- Lokasi yang ditampilkan: Jambi, Indonesia

Nomor WhatsApp dapat diubah melalui `NEXT_PUBLIC_WHATSAPP_NUMBER` dalam format kode negara dan nomor, tanpa tanda + atau spasi.

## Deployment ke Vercel
1. Push folder proyek ke repository GitHub.
2. Import repository ke Vercel.
3. Tambahkan `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, dan `NEXT_PUBLIC_WHATSAPP_NUMBER` pada Project Settings > Environment Variables.
4. Deploy atau redeploy setelah environment variables disimpan.

## Sebelum dipublikasikan
- Ganti atau beri label yang jelas pada seluruh portofolio contoh/demo. Jangan tampilkan sebagai proyek klien sungguhan.
- Pastikan harga paket merupakan harga yang benar-benar disepakati oleh tim.
- Periksa kembali email, WhatsApp, lokasi, kebijakan privasi, dan isi terjemahan.
- Uji formulir setelah Supabase dikonfigurasi.


## Pembaruan UI/UX terbaru
- Area teks animasi pada hero kini memiliki ruang tetap berdasarkan frasa terpanjang, sehingga perubahan karakter tidak menggeser paragraf, tombol, atau elemen lain di bawahnya.
- Pratinjau demo berganti dengan transisi fade/slide singkat, bukan perubahan mendadak.
- Teks animasi menggunakan frasa sesuai bahasa yang dipilih.
- Kamus bahasa diperluas untuk label navigasi, kategori portofolio, metadata demo, layanan, dan formulir kontak.
- Hormati pengaturan `prefers-reduced-motion` untuk pengguna yang mengurangi animasi.
