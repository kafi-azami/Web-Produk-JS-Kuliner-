"use client";

import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import MenuDetailModal from "./MenuDetailModal";
import HorizontalScroller from "./HorizontalScroller";
import type { MenuItem } from "@/lib/sheets";

export type MenuSectionData = {
  kategori: string;
  items: MenuItem[];
};

type MenuPageClientProps = {
  sections: MenuSectionData[];
};

export default function MenuPageClient({ sections }: MenuPageClientProps) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const allItems = useMemo(() => sections.flatMap((section) => section.items), [sections]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allItems.filter((item) => item.nama.toLowerCase().includes(q));
  }, [allItems, query]);

  function scrollToCategory(kategori: string) {
    document
      .getElementById(kategori.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleExpanded(kategori: string) {
    setExpanded((prev) => ({ ...prev, [kategori]: !prev[kategori] }));
  }

  return (
    <>
      {/* B) filter pills + D) search */}
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          {sections.map((section) => (
            <button
              key={section.kategori}
              type="button"
              onClick={() => scrollToCategory(section.kategori)}
              className="rounded-full bg-katering px-4 py-1.5 text-sm font-semibold text-white hover:bg-katering-medium"
            >
              {section.kategori}
            </button>
          ))}

          <div className="ml-auto flex w-full items-center gap-2 rounded-full border border-katering-light bg-white px-4 py-2 sm:w-64">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari Menu"
              className="w-full bg-transparent text-sm outline-none"
            />
            <span aria-hidden="true">🔍</span>
          </div>
        </div>
      </div>

      {searchResults ? (
        <section className="mx-auto max-w-6xl px-6 py-6">
          <p className="mb-3 text-sm font-semibold text-katering">
            Hasil pencarian untuk &ldquo;{query}&rdquo;
          </p>
          {searchResults.length === 0 ? (
            <p className="rounded-xl bg-katering-pale px-4 py-6 text-center text-sm text-katering">
              Menu tidak ditemukan.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {searchResults.map((item, index) => (
                <MenuCard
                  key={`${item.nama}-${index}`}
                  item={item}
                  fullWidth
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        sections.map((section) => (
          <section
            key={section.kategori}
            id={section.kategori.toLowerCase()}
            className="mx-auto max-w-6xl scroll-mt-24 px-6 py-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-katering px-4 py-1 text-sm font-semibold text-white">
                {section.kategori}
              </span>

              {section.items.length > 3 && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(section.kategori)}
                  className="text-sm font-semibold text-katering hover:underline"
                >
                  {expanded[section.kategori] ? "Lebih Sedikit <" : "Lebih Banyak >"}
                </button>
              )}
            </div>

            {section.items.length === 0 ? (
              <p className="rounded-xl bg-katering-pale px-4 py-6 text-center text-sm text-katering">
                Belum ada menu {section.kategori.toLowerCase()} di spreadsheet.
              </p>
            ) : expanded[section.kategori] ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {section.items.map((item, index) => (
                  <MenuCard
                    key={`${item.nama}-${index}`}
                    item={item}
                    fullWidth
                    onClick={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            ) : (
              <HorizontalScroller>
                {section.items.map((item, index) => (
                  <MenuCard
                    key={`${item.nama}-${index}`}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                ))}
              </HorizontalScroller>
            )}
          </section>
        ))
      )}

      <MenuDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
