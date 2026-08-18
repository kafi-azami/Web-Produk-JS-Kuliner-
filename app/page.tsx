import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import MenuSection from "@/components/MenuSection";
import { getMenuByKategori, type MenuItem } from "@/lib/sheets";

export const revalidate = 30;

export default async function HomePage() {
  let makanan: MenuItem[] = [];
  let minuman: MenuItem[] = [];
  let errorMessage: string | null = null;

  try {
    [makanan, minuman] = await Promise.all([
      getMenuByKategori("Makanan"),
      getMenuByKategori("Minuman"),
    ]);
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
  }

  return (
    <>
      <Header />

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-6">
          <div className="relative overflow-hidden rounded-3xl bg-katering-pale shadow-card"
          style={{ backgroundImage: "url(/katr.jpg)"}}>
            <span className="absolute left-4 top-4 z-10 rounded-md bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Tentang katering
            </span>
            <div className="flex h-44 flex-col items-center justify-center gap-1 bg-gradient-to-br from-katering-light/40 via-katering-pale to-katering/20 px-6 text-center sm:h-60">
              <p className="font-display text-xl font-semibold text-katering-dark sm:text-2xl">
                Katering
              </p>
              <p className="text-sm text-katering">
                foto
              </p>
            </div>
          </div>
        </section>

        {errorMessage && (
          <p className="mx-auto mt-6 max-w-6xl rounded-xl bg-red-50 px-6 py-4 text-sm text-red-600">
            Tidak bisa mengambil data dari spreadsheet: {errorMessage}
          </p>
        )}

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-katering px-6 py-1.5 text-sm font-semibold text-white shadow-sm">
              layanan
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </section>

        {/* Menu sections, live dari spreadsheet */}
        <MenuSection title="Makanan" items={makanan} viewAllHref="/menu" />
        <MenuSection title="Minuman" items={minuman} viewAllHref="/menu" />
      </main>

      <Footer />
    </>
  );
}
