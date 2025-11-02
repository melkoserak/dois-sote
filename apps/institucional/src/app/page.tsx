import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Você criará estes componentes dentro de /src/components/sections/
// import { HeroSection } from '@/components/sections/HeroSection';
// import { FeaturesSection } from '@/components/sections/FeaturesSection';
// import { AudienceSection } from '@/components/sections/AudienceSection';
// import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
// import { DigitalContractSection } from '@/components/sections/DigitalContractSection';
// import { TrustSection } from '@/components/sections/TrustSection';
// import { CtaFeaturesSection } from '@/components/sections/CtaFeaturesSection';
// import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
// import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
// import { FaqSection } from '@/components/sections/FaqSection';
// import { NewsletterSection } from '@/components/sections/NewsletterSection';


// Esta é a sua página principal (Home)
export default function HomePage() {
  return (
    <>
      {/* Seu header.php e footer.php são traduzidos para componentes de Layout
        que são colocados no arquivo `layout.tsx` principal.
        
        Este arquivo (page.tsx) traduz o *conteúdo* de front-page.php 
      */}
      
      {/* <HeroSection /> */}
      {/* <FeaturesSection /> */}
      
      <main id="primary" className="site-main">
        {/* <AudienceSection /> */}
        {/* <DifferentialsSection /> */}
        {/* <DigitalContractSection /> */}
        {/* <TrustSection /> */}
        {/* <CtaFeaturesSection /> */}
        {/* <TestimonialsSection /> */}
      </main>
      
      {/* <BlogPreviewSection /> */}
      
      <div className="container mx-auto max-w-[1280px] px-6">
        <main id="primary-faq" className="site-main">
          {/* <FaqSection /> */}
        </main>
      </div>

      {/* <NewsletterSection /> */}

      {/* NOTA: Você vai "traduzir" cada <section> do seu `front-page.php`
        para um componente React (ex: <HeroSection />) e importá-los aqui.
        Dentro desses componentes, você usará os componentes do @goldenbear/ui
        (como <Button>) para manter o Design System.
      */}
      
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Site Institucional (Home Page)</h1>
        <p className="text-text-light">Traduza as seções do `front-page.php` para componentes React aqui.</p>
      </div>
    </>
  );
}