import { formatRupiah } from "@/lib/format";
import type { MenuItem } from "@/lib/sheets";

type MenuCardProps = {
  item: MenuItem;
  onClick?: () => void;
  fullWidth?: boolean;
};

export default function MenuCard({ item, onClick, fullWidth = false }: MenuCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-katering text-left shadow-sm ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-card focus:outline-none focus-visible:ring-katering-accent ${
        fullWidth ? "w-full" : "w-40 sm:w-48"
      }`}
    >
      <div className="aspect-square bg-katering-pale">
        {item.gambar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.gambar}
            alt={item.nama}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-2 text-center text-xs text-katering">
            Tidak ada gambar
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 p-3">
        <p className="line-clamp-1 font-display text-sm font-semibold text-white">{item.nama}</p>
        <span className="w-fit rounded-full bg-katering-light px-3 py-1 text-xs font-bold text-katering-dark">
          {formatRupiah(item.harga)}
        </span>
      </div>
    </button>
  );
}
