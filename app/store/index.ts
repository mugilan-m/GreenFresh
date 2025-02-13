/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface StoreState {
  count: number;
  todos: Todo[];
  whislist: Product[];
  loading: boolean;
  error: { message: string; status?: number } | null; 
  data: Product[] | null;
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  addWishlist: (product: Product) => void;
  removeWishlist: (id: number) => void;
  fetchData: () => Promise<void>;
}
export const useProductStore = create(
  persist<StoreState>(
    (set) => ({
      count: 0,
      todos: [],
      whislist: [],
      loading: true,
      error: null,
      data: null,
      addTodo: (description: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: uuidv4(), description, completed: false },
          ],
        })),
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
        addWishlist: (product: Product) =>
        set((state) => {
          const alreadyInWishlist = state.whislist.some(
            (item) => item.id === product.id
          );
          if (!alreadyInWishlist) {
            return { whislist: [...state.whislist, product] };
          } else {
            console.log('Product already in wishlist:', product.title);
            set({
                error: { message: `Product already in wishlist:${product.title}`, status: 400 },
                loading: false,
              });
            return { whislist: state.whislist };
          }
        }),
      removeWishlist: (id: number) =>
        set((state) => ({
          whislist: state.whislist.filter((product) => product.id !== id),
        })),
      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch('https://dummyjson.com/products');
          if (!res.ok) {
            throw new Error(
              `HTTP error! status: ${res.status} - ${await res.text()}`
            ); //Include response text for more info
          }
          const json: ApiResponse = await res.json();
          set({ data: json.products, loading: false, error: null });
        } catch (error:any) {
          set({
            error: { message: error.message, status: error.status },
            loading: false,
          });
        }
      },
    }),
    {
      name: 'count-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
