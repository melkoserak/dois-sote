import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@goldenbear/ui/src/components/button';

export const HeroSection = () => {
  // Dados do seu front-page.php
  const heroImageUrl = '/imagens/familia-hero.jpg'; 

  return (
    <section id="hero" className="hero-section-split-right overflow-hidden bg-background">
      <div className="hero-layout-split-right flex flex-col md:flex-row md:items-stretch">
        
        {/* Coluna de Texto */}
        <div className="hero-text-column order-2 flex flex-col justify-center py-10 px-6 text-center md:order-1 md:w-1/2 md:py-20 md:pl-[max(1.5rem,calc((100%-1280px)/2+1.5rem))] md:pr-6 md:text-left">
          <div className="hero-text-content mx-auto w-full max-w-lg md:mx-0">
            <p className="hero-label block text-base font-bold text-primary">
              Seguro de Vida para Militares:
            </p>
            <h1 className="hero-title mt-3 mb-7 text-4xl font-bold leading-tight text-text md:text-5xl">
              A Proteção Essencial para Quem Dedica a Vida ao Brasil
            </h1>
            <div className="hero-cta-container">
              <Button asChild size="lg" className="hero-cta">
                <Link href="/simulador">
                  Simulação Gratuita e Rápida
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Coluna de Imagem */}
        <div className="hero-image-column-full order-1 h-[280px] min-h-[250px] w-full md:order-2 md:h-auto md:w-1/2 md:min-h-[400px]">
          <Image
            src={heroImageUrl}
            alt="Família sorrindo - Seguro de Vida Militar"
            width={800} // Proporção da imagem
            height={700} // Proporção da imagem
            className="h-full w-full object-cover object-center md:object-cover"
            priority // Carrega esta imagem primeiro (LCP - Otimização de Performance)
          />
        </div>
      </div>
    </section>
  );
};