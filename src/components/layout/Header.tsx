import { Link, useRouterState } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/appStore';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage, theme, setTheme } = useAppStore();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

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
    { to: '/about' as const, label: t('nav.about') },
    { to: '/projects' as const, label: t('nav.projects') },
    { to: '/stack' as const, label: t('nav.stack') },
    { to: '/contact' as const, label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <Link 
          to="/" 
          className="font-display text-xl text-foreground hover:text-muted-foreground transition-colors"
        >
          Portfolio
        </Link>
        
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`editorial-link text-sm tracking-wide uppercase ${
                pathname === link.to 
                  ? 'text-foreground' 
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
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
      </div>
    </header>
  );
};
