import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css"; // Importa o globals.css que carrega o design system
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Configuração da fonte (baseada no seu style.css)
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Golden Bear Seguros | Proteção para Militares",
  description: "A Proteção Essencial para Quem Dedica a Vida ao Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${noto.className} bg-white text-text-color`}>
        {/* O Preloader do seu main.js pode ser recriado aqui se necessário */}
        
        <Header />
        
        {/* O 'children' aqui será o `page.tsx` ou `seguro-exercito/page.tsx` */}
        <div id="content" className="site-content">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}