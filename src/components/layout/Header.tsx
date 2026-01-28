import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/appStore';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useAppStore();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/stack', label: t('nav.stack') },
    { to: '/contact', label: t('nav.contact') },
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
                location.pathname === link.to 
                  ? 'text-foreground' 
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors ml-4"
          >
            {language === 'en' ? 'VI' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
};
