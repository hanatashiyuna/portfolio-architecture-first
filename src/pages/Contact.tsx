import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContact } from '@/hooks/useContact';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useTranslation();
  const contactMutation = useContact();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await contactMutation.mutateAsync(form);
      toast.success(t('contact.success'));
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error(t('contact.error'));
    }
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-2xl">
        <p className="text-xs text-foreground/60 uppercase tracking-wide mb-3 font-medium">
          {t('contact.title')}
        </p>
        
        <h1 className="editorial-large text-foreground mb-8 text-balance">
          Have a project in mind? Let's talk.
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="text-xs text-foreground/70 uppercase tracking-wide block mb-2 font-medium"
            >
              {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="text-xs text-foreground/70 uppercase tracking-wide block mb-2 font-medium"
            >
              {t('contact.email')}
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label 
              htmlFor="message"
              className="text-xs text-foreground/70 uppercase tracking-wide block mb-2 font-medium"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="group inline-flex items-center gap-2 text-foreground text-lg font-medium mt-2 hover:text-foreground/80 transition-colors"
          >
            <span className="relative">
              {contactMutation.isPending ? t('common.loading') : t('contact.send')}
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right" />
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
