import Link from 'next/link';
import Image from 'next/image';
// Importa o Botão do seu pacote de UI compartilhado!
import { Button } from '@goldenbear/ui/src/components/button'; 

export const Header = () => {
  // O seu header.php usa imagens/logo-golden-bear.svg
  const logoUrl = '/imagens/logo-golden-bear.svg'; 
  const userIconUrl = '/imagens/icon-user.svg';

  return (
    <header id="masthead" className="site-header sticky top-0 z-50 w-full border-b border-light-gray-color bg-white py-6">
      <div className="container-header mx-auto flex max-w-[1600px] flex-wrap items-center justify-between px-6">
        <div className="site-branding mr-[30px] flex-shrink-0">
          <Link href="/" rel="home">
            <Image src={logoUrl} alt="Golden Bear Logo" width={180} height={40} className="h-auto max-h-[60px] w-auto" />
          </Link>
        </div>

        {/* O menu wp_nav_menu será traduzido para um componente de navegação aqui */}
        <nav id="site-navigation" className="main-navigation hidden flex-grow justify-center md:flex">
          <ul id="primary-menu" className="flex flex-wrap justify-start">
            <li className="mx-3"><Link href="/quem-somos" className="block px-2 py-2 text-base font-medium text-text-color transition-colors hover:text-primary">Sobre</Link></li>
            <li className="mx-3"><Link href="/seguro-exercito" className="block px-2 py-2 text-base font-medium text-text-color transition-colors hover:text-primary">Seguro Exército</Link></li>
            <li className="mx-3"><Link href="/contato" className="block px-2 py-2 text-base font-medium text-text-color transition-colors hover:text-primary">Contato</Link></li>
            <li className="mx-3"><Link href="/blog" className="block px-2 py-2 text-base font-medium text-text-color transition-colors hover:text-primary">Blog</Link></li>
          </ul>
        </nav>

        <div className="header-actions ml-5 flex flex-shrink-0 items-center">
          <Link href="/api/auth/login" className="login-link mr-4 flex items-center gap-2 rounded-lg p-2 text-base font-medium text-text-color transition-colors hover:bg-light-gray-color hover:text-primary">
            <Image src={userIconUrl} alt="Login" width={18} height={18} aria-hidden="true" />
            Entrar
          </Link>
          
          {/* USANDO SEU COMPONENTE DE BOTÃO COMPARTILHADO!
            Ele já vem com as cores e estilos corretos do seu Design System.
          */}
          <Button asChild className="header-cta px-5 py-2 text-sm">
            <Link href="/simulador">
              Faça a sua simulação
            </Link>
          </Button>
        </div>
        
        {/* Botão de Menu Mobile (Hamburger) */}
        <div className="menu-toggle md:hidden">
          {/* Adicionar lógica de toggle do menu mobile aqui */}
          <button aria-controls="primary-menu" aria-expanded="false" className="menu-toggle">
            <span className="icon-bar block h-0.5 w-6 bg-current transition-all"></span>
            <span className="icon-bar mt-1.5 block h-0.5 w-6 bg-current transition-all"></span>
            <span className="icon-bar mt-1.5 block h-0.5 w-6 bg-current transition-all"></span>
          </button>
        </div>

      </div>
    </header>
  );
};