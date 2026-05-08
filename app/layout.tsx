import type { Metadata } from "next";
import { Inter, Anton, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabrina de Souza, Personal Trainer | Especialista em Emagrecimento",
  description:
    "Personal Trainer online e presencial. Especialista em emagrecimento sem efeito sanfona. Método exclusivo da Sabrina de Souza.",
  icons: {
    icon: [
      {
        url: "/nl4QZrRnCu23Sg18__1_-removebg-preview.png",
        type: "image/png",
      },
    ],
    apple: "/nl4QZrRnCu23Sg18__1_-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${anton.variable} ${outfit.variable}`}
    >
      <body className="font-sans bg-bone text-ink">{children}</body>
    </html>
  );
}
