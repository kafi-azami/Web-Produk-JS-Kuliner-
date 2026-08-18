import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPageClient, { type MenuSectionData } from "@/components/MenuPageClient";
import { getMenuByKategori } from "@/lib/sheets";

export const revalidate = 30;

const CATEGORIES = ["Makanan", "Minuman", "Sayur", "Snack"];

export default async function MenuPage() {
  let sections: MenuSectionData[] = [];
  let errorMessage: string | null = null;

  try {
    sections = await Promise.all(
      CATEGORIES.map(async (kategori) => ({
        kategori,
        items: await getMenuByKategori(kategori),
      }))
    );
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
  }

  return (
    <>
      <Header />

      <main>
        {errorMessage ? (
          <p className="mx-auto mt-6 max-w-6xl rounded-xl bg-red-50 px-6 py-4 text-sm text-red-600">
            Tidak bisa mengambil data dari spreadsheet: {errorMessage}
          </p>
        ) : (
          <MenuPageClient sections={sections} />
        )}
      </main>

      <Footer />
    </>
  );
}
