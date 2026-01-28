import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/appStore';
import { Moon, Sun, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRouterState } from '@tanstack/react-router';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage, theme, setTheme } = useAppStore();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/stack', label: t('nav.stack') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.to}
          href={link.to}
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', link.to);
            window.dispatchEvent(new PopStateEvent('popstate'));
            onClick?.();
          }}
          className={`editorial-link text-sm tracking-wide uppercase cursor-pointer ${
            currentPath === link.to 
              ? 'text-foreground font-semibold' 
              : 'text-muted-foreground font-normal'
          }`}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="font-display text-xl text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
        >
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          
          <button 
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            {language === 'en' ? 'VI' : 'EN'}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="font-display text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                <NavLinks onClick={() => setIsOpen(false)} />
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </button>
                  
                  <button 
                    onClick={toggleLanguage}
                    className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === 'en' ? 'VI' : 'EN'}
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};