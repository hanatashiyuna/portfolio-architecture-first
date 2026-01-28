import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useAppStore();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/stack', label: t('nav.stack') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground">
          Portfolio
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" onClick={toggleLanguage}>
            {language.toUpperCase()}
          </Button>
        </nav>
      </div>
    </header>
  );
};
