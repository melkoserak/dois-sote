"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@goldenbear/ui/src/components/button';
import { cn } from '@goldenbear/ui/src/lib/utils';
// --- IMPORTAÇÃO DE ÍCONES (PERFORMANCE) ---
import { User, Menu, X } from 'lucide-react';

// Lista de links do menu (substitui o wp_nav_menu)
const navLinks = [
  { href: "/quem-somos", label: "Sobre" },
  { href: "/seguro-militar", label: "Seguro Exército" },
  { href: "/contato", label: "Contato" },
  { href: "/blog", label: "Blog" },
];

export const Header = () => {
  // 1. Estado para o menu mobile (lógica do initMobileMenuToggle em main.js)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Estado para o header fixo (lógica do initStickyHeader em main.js)
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (Math.abs(lastScrollTop - scrollTop) <= 5) return;
      
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        setIsHidden(true); // Esconde ao rolar para baixo
      } else {
        setIsHidden(false); // Mostra ao rolar para cima
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // 3. Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-is-open', 'overflow-hidden');
    } else {
      document.body.classList.remove('mobile-menu-is-open', 'overflow-hidden');
    }
  }, [isMenuOpen]);

  const logoUrl = '/imagens/logo-golden-bear.svg';
  const userIconUrl = '/imagens/icon-user.svg';

  return (
    // Aplica a classe do header fixo com base no estado
    <header 
      id="masthead" 
      className={cn(
        "site-header sticky top-0 z-50 w-full border-b border-light-gray bg-background py-6 transition-transform duration-300 ease-in-out",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container-header mx-auto flex max-w-[1600px] flex-wrap items-center justify-between px-6">
        {/* Branding (logo) */}
        <div className="site-branding mr-[30px] flex-shrink-0">
          <Link href="/" rel="home">
            <Image src={logoUrl} alt="Golden Bear Logo" width={180} height={40} className="h-auto max-h-[60px] w-auto" priority />
          </Link>
        </div>

        {/* Navegação Desktop (tradução do wp_nav_menu) */}
        <nav id="site-navigation" className="main-navigation hidden flex-grow justify-center md:flex">
          <ul id="primary-menu" className="flex flex-wrap justify-start">
            {navLinks.map((link) => (
              <li key={link.href} className="mx-3">
                <Link href={link.href} className="block px-2 py-2 text-base font-medium text-text transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações (Login e CTA) */}
        <div className="header-actions ml-5 hidden flex-shrink-0 items-center md:flex">
          <Link href="/api/auth/login" className="login-link mr-4 flex items-center gap-2 rounded-lg p-2 text-base font-medium text-text transition-colors hover:bg-light-gray hover:text-primary">
            {/* --- ÍCONE DE ALTA PERFORMANCE --- */}
            <User className="h-5 w-5" aria-hidden="true" />
            Entrar
          </Link>
          <Button asChild className="header-cta px-5 py-2 text-sm">
            <Link href="/simulador">Faça a sua simulação</Link>
          </Button>
        </div>
        
        {/* Botão de Menu Mobile (Hamburger) */}
        <div className="menu-toggle md:hidden">
          <button 
            aria-controls="primary-menu-mobile" 
            aria-expanded={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle rounded-md p-2"
          >
            <span className="sr-only">Menu</span>
            {/* --- ÍCONE DE ALTA PERFORMANCE --- */}
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile Dropdown (tradução de .main-navigation.toggled) */}
      {isMenuOpen && (
        <div id="primary-menu-mobile" className="main-navigation-mobile absolute left-0 top-full z-40 w-full border-t border-border bg-background shadow-lg md:hidden">
          <ul className="flex flex-col p-4">
            {/* ... (links do nav) ... */}
            {/* Ações dentro do menu mobile */}
            <li className="mt-4 px-2">
              <Link href="/api/auth/login" className="flex items-center gap-2 py-2 text-base font-medium text-text transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {/* --- ÍCONE DE ALTA PERFORMANCE --- */}
                <User className="h-5 w-5" aria-hidden="true" />
                Entrar
              </Link>
            </li>
            {/* ... (botão de simulação) ... */}
          </ul>
        </div>
      )}
    </header>
  );
};