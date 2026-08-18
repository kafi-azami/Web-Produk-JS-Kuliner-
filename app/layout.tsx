import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lorem ipsum | Katering",
  description: "Website katering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-katering-pale font-sans text-katering-dark antialiased">
        <div className="fixed inset-0 -z-10">
          <img src="/BgKat.jpg" alt="" className="object-center object-contain" />
        </div>
        {children}
      </body>
    </html>
  );
}
