import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../functions/fetchData';

export const useFetchData = () => {
  return useQuery({
    queryKey: ['views'],
    queryFn: fetchData,
    staleTime: 60000,
    refetchOnWindowFocus: true,
  });
};