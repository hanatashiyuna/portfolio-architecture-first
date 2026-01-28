import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export const useStack = () => {
  return useQuery({
    queryKey: ['stack'],
    queryFn: () => api.getStack(),
    select: (response) => response.data,
  });
};
