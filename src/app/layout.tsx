import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Evelyn Rose",
  description: "A showcase of my finest moments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col pt-20">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </LanguageProvider>

      </body>
    </html>
  );
}
