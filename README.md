# Web Produk JS Kuliner

Web Produk JS Kuliner adalah aplikasi berbasis web katalog yang dirancang untuk menampilkan berbagai produk makanan dan layanan katering secara online. Proyek ini difokuskan sebagai halaman etalase digital statis untuk menyajikan menu hidangan kuliner secara interaktif dan informatif kepada pengunjung.

---

## Fitur Aplikasi

Aplikasi ini berfungsi sebagai platform katalog informasi satu arah yang berfokus pada kemudahan pencarian menu bagi pengguna tanpa alur transaksi di dalam sistem.

### Fitur Pengguna (User)
* **Katalog Produk Kuliner:** Menampilkan seluruh daftar menu katering dan produk kuliner yang tersedia secara terstruktur.
* **Pencarian Menu (Searching):** Memungkinkan pengguna untuk mencari menu makanan tertentu secara cepat melalui kolom pencarian teks.
* **Filter Jenis Makanan:** Menyaring tampilan hidangan berdasarkan kategori atau jenis makanan untuk mempermudah penjelajahan produk.

*Catatan: Aplikasi ini berjalan tanpa halaman admin khusus dan tidak menyediakan fitur transaksi langsung (pemesanan) di dalam sistem web.*

---

## Teknologi Utama

Proyek ini menggunakan kombinasi teknologi modern untuk memuat data menu secara dinamis dan responsif:

| Komponen | Teknologi |
| :--- | :--- |
| Framework | Next.js 15 |
| Bahasa Pemrograman | TypeScript |
| Struktur Styling | Tailwind CSS |
| Komponen UI | Shadcn UI / Custom Components |
| Database / Penyimpanan | Google Sheets (Spreadsheet) |

---

## Struktur Direktori

```text
├── app/              # Routing halaman utama dan tata letak aplikasi (Layout)
├── components/       # Komponen UI modular (card produk, filter bar, search input)
├── lib/              # Fungsi utilitas untuk fetch data dari Google Sheets API
└── public/           # Aset statis seperti gambar produk kuliner dan aset visual
```

---

## Sistem Data

Aplikasi ini menggunakan **Google Sheets** sebagai *Content Management System* (CMS) atau database jarak jauh. Seluruh data menu mulai dari nama produk, kategori, deskripsi, hingga tautan gambar ditarik secara dinamis menggunakan API. Pengelola dapat memperbarui daftar produk yang tampil di website secara langsung hanya dengan mengedit baris data pada dokumen spreadsheet terkait.

---

## Pengembangan Lebih Lanjut

Beberapa rencana peningkatan untuk proyek katalog kuliner ini meliputi:
* Penambahan tombol navigasi pesanan langsung ke WhatsApp (WhatsApp Checkout).
* Fitur detail produk untuk menampilkan komposisi makanan atau ulasan.
* Optimasi gambar produk untuk performa pemuatan halaman yang lebih cepat.

