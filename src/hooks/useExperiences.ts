import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export const useExperiences = () => {
  return useQuery({
    queryKey: ['experiences'],
    queryFn: () => api.getExperiences(),
    select: (response) => response.data,
  });
};
