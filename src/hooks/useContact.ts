import { useMutation } from '@tanstack/react-query';
import { api } from '@/services/api';
import type { ContactForm } from '@/types';

export const useContact = () => {
  return useMutation({
    mutationFn: (form: ContactForm) => api.sendContact(form),
  });
};
