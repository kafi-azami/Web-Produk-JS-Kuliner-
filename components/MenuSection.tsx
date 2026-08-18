"use client";

import { useState } from "react";
import Link from "next/link";
import MenuCard from "./MenuCard";
import MenuDetailModal from "./MenuDetailModal";
import HorizontalScroller from "./HorizontalScroller";
import type { MenuItem } from "@/lib/sheets";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  viewAllHref: string;
};

export default function MenuSection({ title, items, viewAllHref }: MenuSectionProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-katering px-4 py-1 text-sm font-semibold text-white">
          {title}
        </span>
        <Link
          href={viewAllHref}
          className="text-sm font-semibold text-katering hover:underline"
        >
          Lihat Menu &gt;
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="rounded-xl bg-katering-pale px-4 py-6 text-center text-sm text-katering">
          Belum ada menu {title.toLowerCase()} di spreadsheet.
        </p>
      ) : (
        <HorizontalScroller>
          {items.map((item, index) => (
            <MenuCard
              key={`${item.nama}-${index}`}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </HorizontalScroller>
      )}

      <MenuDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
