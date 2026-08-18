import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "MENU", href: "/menu" },
  { label: "CONTACT", href: "/contact" },
];

type HeaderProps = {
  backgroundImage?: string;
}

export default function Header({ backgroundImage }: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage || "/bg.jpg"})`,
       }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-katering-dark/90 via-katering/85 to-katering-medium/75"/>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-katering-accent shadow-sm ring-2 ring-white" aria-hidden="true" />
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            JS Produk
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-xs font-semibold tracking-wide text-white sm:gap-8 sm:text-sm">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="relative py-1 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-katering-accent after:transition-all hover:text-katering-accent hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
