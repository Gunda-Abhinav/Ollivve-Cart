
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types/database";

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from Supabase...');
      
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

      console.log('Products fetched:', data);
      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      console.log('Fetching product:', id);
      
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }

      console.log('Product fetched:', data);
      return data as Product;
    },
    enabled: !!id,
  });
};
