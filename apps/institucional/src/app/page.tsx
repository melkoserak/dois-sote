// Importe os componentes de seção que você criará
import { HeroSection } from '@/components/sections/HeroSection';
// import { FeaturesSection } from '@/components/sections/FeaturesSection';
// import { AudienceSection } from '@/components/sections/AudienceSection';
// import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
// import { DigitalContractSection } from '@/components/sections/DigitalContractSection';
// import { TrustSection } from '@/components/sections/TrustSection';
// import { CtaFeaturesSection } from '@/components/sections/CtaFeaturesSection';
// import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
// import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { FaqSection } from '@/components/sections/FaqSection';
// import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection /> {/* Está correto agora */}
      {/* <FeaturesSection /> */}
      
      <div id="content" className="site-content">
        <div className="container">
          <main id="primary" className="site-main">
            {/* <AudienceSection /> */}
            {/* <DifferentialsSection /> */}
            {/* <DigitalContractSection /> */}
            {/* <TrustSection /> */}
            {/* <CtaFeaturesSection /> */}
            {/* <TestimonialsSection /> */}
          </main>
        </div>
      </div>
      
      {/* <BlogPreviewSection /> */}
      
      <div id="content-faq" className="site-content">
        <div className="container">
          <main id="primary-faq" className="site-main">
            <FaqSection /> {/* Já criamos este */}
          </main>
        </div>
      </div>

      {/* <NewsletterSection /> */}
    </>
  );
}