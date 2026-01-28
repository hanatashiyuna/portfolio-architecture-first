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
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-2xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
          {t('contact.title')}
        </p>
        
        <h1 className="editorial-large text-foreground mb-12 text-balance">
          Have a project in mind? Let's talk.
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label 
              htmlFor="name" 
              className="text-xs text-muted-foreground uppercase tracking-wide block mb-3"
            >
              {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="text-xs text-muted-foreground uppercase tracking-wide block mb-3"
            >
              {t('contact.email')}
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div>
            <label 
              htmlFor="message"
              className="text-xs text-muted-foreground uppercase tracking-wide block mb-3"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="editorial-link text-foreground text-lg mt-4"
          >
            {contactMutation.isPending ? t('common.loading') : t('contact.send')} →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
