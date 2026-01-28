import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => api.getProjects(),
    select: (response) => response.data,
  });
};

export const useProject = (slug: string) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: () => api.getProject(slug),
    select: (response) => response.data,
    enabled: !!slug,
  });
};
