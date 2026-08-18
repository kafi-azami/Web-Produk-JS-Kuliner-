import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/share/1BwEA2RzS4/" },
  { label: "Instagram", href: "https://www.instagram.com/kulinerjsproduk?igsh=MXhpbTM5NXdsZndqZA==" },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <div className="flex h-64 items-center justify-center bg-gradient-to-r from-katering-light/40 via-katering-pale to-katering/20 text-sm text-katering sm:h-80">
            <img src="/katr.jpg" alt="" className="object-cover objrect-center"/>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="font-display text-lg font-semibold text-katering-dark">Hubungi kami lewat sosial media</p>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-katering px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-katering-medium hover:shadow-card"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
