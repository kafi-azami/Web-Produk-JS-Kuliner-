function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.6-3.5 4.2-5.2 7.5-5.2s5.9 1.7 7.5 5.2" strokeLinecap="round" />
    </svg>
  );
}

type ServiceCardProps = {
  title?: string;
  subtitle?: string;
};

export default function ServiceCard({
  title = "Lorem ipsum",
  subtitle = "Lorem ipsum",
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-katering px-4 py-6 text-center text-white shadow-card transition hover:-translate-y-0.5">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
        <PersonIcon />
      </span>
      <p className="font-display text-sm font-semibold">{title}</p>
      <span className="rounded-full bg-katering-medium px-4 py-1 text-xs font-medium">
        {subtitle}
      </span>
    </div>
  );
}
