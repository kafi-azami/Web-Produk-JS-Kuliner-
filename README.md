# Katering App (TypeScript) — Tahap 1, 2 & 3

## Menjalankan project

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Sumber data

Data menu diambil langsung dari Google Spreadsheet (tanpa backend), lewat
`https://opensheet.elk.sh/SHEET_ID/SHEET_TAB`.

Konfigurasi ada di file `.env.local`:

```
SHEET_ID=1R5E8zZdwrT-SZxiG3eR5ypWFpyz_5ADJ0PGPQIDk7QU
SHEET_TAB=Menu
```

Kolom yang dipakai di spreadsheet: `Nama`, `Deskripsi`, `Harga`, `Gambar`, `Kategori`.
Kategori yang dikenali halaman Menu: `Makanan`, `Minuman`, `Sayur`, `Snack`.

## Struktur halaman

- `/` — Home (Tahap 1)
- `/menu` — Menu (Tahap 2)
- `/contact` — Contact (Tahap 3)

## Status

### Tahap 1 — Home
- [x] A. Home page sesuai desain
- [x] B. "Lihat Menu >" mengarah ke `/menu`
- [x] C. Baris menu Makanan/Minuman bisa digeser (scroll horizontal)
- [x] D. Klik box menu menampilkan detail (modal)

### Tahap 2 — Menu
- [x] A. Halaman Menu sesuai desain
- [x] B. Filter pill (Makanan/Minuman/Sayur/Snack) → scroll ke section terkait
- [x] C. Baris tiap kategori bisa digeser & diklik (modal detail sama seperti Home)
- [x] D. Fitur searching (mencari menu berdasarkan nama)
- [x] E. "Lebih Banyak >" menampilkan semua menu kategori tsb dalam grid

### Tahap 3 — Contact
- [x] Halaman Contact dengan foto
- [x] Tombol ke Facebook & Instagram (link masih placeholder, ganti di `app/contact/page.tsx`)
