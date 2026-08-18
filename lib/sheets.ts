const SHEET_ID = process.env.SHEET_ID;
const SHEET_TAB = process.env.SHEET_TAB || "Menu";

export type MenuItem = {
  nama: string;
  deskripsi: string;
  harga: number;
  gambar: string;
  kategori: string;
};

type RawRow = Record<string, string | undefined>;

/**
 * Mengambil seluruh baris menu langsung dari Google Spreadsheet
 * lewat opensheet.elk.sh (spreadsheet publik "Anyone with the link: Viewer").
 * Tidak butuh backend / API key.
 */
export async function getAllMenu(): Promise<MenuItem[]> {
  const url = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_TAB}`;

  const res = await fetch(url, {
    // data akan di-refresh otomatis setiap 30 detik
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error(
      `Gagal mengambil data dari spreadsheet (status ${res.status}). Pastikan sheet sudah di-share "Anyone with the link".`
    );
  }

  const rows: RawRow[] = await res.json();

  return rows.map((row) => ({
    nama: row.Nama || row.nama || "",
    deskripsi: row.Deskripsi || row.deskripsi || "",
    harga: Number(row.Harga || row.harga || 0),
    gambar: row.Gambar || row.gambar || "",
    kategori: (row.Kategori || row.kategori || "").trim(),
  }));
}

export async function getMenuByKategori(kategori: string): Promise<MenuItem[]> {
  const all = await getAllMenu();
  return all.filter(
    (item) => item.kategori.toLowerCase() === kategori.toLowerCase()
  );
}

export async function getKategoriList(): Promise<string[]> {
  const all = await getAllMenu();
  const set = new Set(all.map((item) => item.kategori).filter(Boolean));
  return Array.from(set);
}
