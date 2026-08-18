export function formatRupiah(value: number | string | undefined): string {
  const number = Number(value) || 0;
  return `Rp ${number.toLocaleString("id-ID")}`;
}
