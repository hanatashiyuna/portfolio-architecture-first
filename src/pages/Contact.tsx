import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContact } from '@/hooks/useContact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">{t('contact.title')}</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contact.name')}</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.email')}</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('contact.message')}</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            required
          />
        </div>

        <Button type="submit" disabled={contactMutation.isPending}>
          {contactMutation.isPending ? t('common.loading') : t('contact.send')}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
