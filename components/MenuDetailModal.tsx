"use client";

import { useEffect } from "react";
import { formatRupiah } from "@/lib/format";
import type { MenuItem } from "@/lib/sheets";

type MenuDetailModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function MenuDetailModal({ item, onClose }: MenuDetailModalProps) {
  useEffect(() => {
    if (!item) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-sm overflow-hidden rounded-3xl bg-katering shadow-2xl ring-1 ring-white/10 sm:max-w-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40"
        >
          ✕
        </button>

        <div className="flex w-full flex-col gap-4 p-6 sm:flex-row">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-white">{item.nama}</h3>
            <p className="mt-1 text-sm text-katering-pale">
              {item.deskripsi || "Lorem ipsum"}
            </p>

            <span className="mt-6 inline-block rounded-full bg-katering-light px-5 py-2 text-base font-bold text-katering-dark">
              {formatRupiah(item.harga)}
            </span>
          </div>

          <div className="aspect-square w-full flex-shrink-0 overflow-hidden rounded-2xl bg-katering-pale sm:w-40">
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
        </div>
      </div>
    </div>
  );
}
