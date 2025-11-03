import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google"; // Importe a fonte
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Configuração da fonte (baseada no seu style.css)
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans", // Para o tailwind.config.ts
});

export const metadata: Metadata = {
  // ...
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      {/* A classe da fonte é aplicada aqui.
        As classes de cor vêm do seu tailwind.config.ts (ex: bg-background, text-text)
      */}
      <body className={`${noto.variable} font-sans bg-background text-text`}>
        {/* O Preloader do main.js pode ser um Client Component aqui, se necessário */}
        
        <Header /> {/* Nosso header.php traduzido */}
        <main id="content" className="site-content">
          {children}
        </main>
        <Footer /> {/* Nosso footer.php traduzido */}
      </body>
    </html>
  );
}