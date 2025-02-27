/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
const count = 0;
interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

interface Product {
  quantity: number;
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
  addtocart: Product[];
  loading: boolean;
  error: { message: string; status?: number } | null;
  data: Product[] | null;
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  addWishlist: (product: Product) => void;
  removeWishlist: (id: number) => void;
  Addtocart: (product: Product) => void;
  Addquantity :(product:Product)=>void;
  removecart: (id: number) => void;
  fetchData: () => Promise<void>;
}
export const useProductStore = create(
  persist<StoreState>(
    (set, get) => ({
      count: 0,
      todos: [],
      whislist: [],
      addtocart: [],
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
            console.log("Product already in wishlist:", product.title);
            set({
              error: {
                message: `Product already in wishlist:${product.title}`,
                status: 400,
              },
              loading: false,
            });
            return { whislist: state.whislist };
          }
        }),
      removeWishlist: (id: number) =>
        set((state) => ({
          whislist: state.whislist.filter((product) => product.id !== id),
        })),
      Addtocart: (product: Product) =>
        set((state) => {
          const alreadyInCart = state.addtocart.find(
            (item) => item.id === product.id
          );

          if (!alreadyInCart) {
            // If the product is not in the cart, add it with a quantity of 1
            return {
              addtocart: [...state.addtocart, { ...product, quantity: 1 }],
            };
          } else {
            // If the product is already in the cart, increase its quantity
            const updatedCart = state.addtocart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            return { addtocart: updatedCart };
          }
        }),
      removecart: (id: number) =>
        set((state) => ({
          addtocart: state.addtocart.filter((product) => product.id !== id),
        })),

      Addquantity: (product: Product) =>
          set((state) => {
            const alreadyInCart = state.addtocart.find(
              (item) => item.id === product.id
            );
  
            if (!alreadyInCart) {
              // If the product is not in the cart, add it with a quantity of 1
              return {
                addtocart: [...state.addtocart, { ...product, quantity: 1 }],
              };
            } else {
              // If the product is already in the cart, increase its quantity
              const updatedCart = state.addtocart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
  
              return { addtocart: updatedCart };
            }
          }),




      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("https://dummyjson.com/products");
          if (!res.ok) {
            throw new Error(
              `HTTP error! status: ${res.status} - ${await res.text()}`
            ); //Include response text for more info
          }
          const json: ApiResponse = await res.json();
          set({ data: json.products, loading: false, error: null });
        } catch (error: any) {
          set({
            error: { message: error.message, status: error.status },
            loading: false,
          });
        }
      },
    }),
    {
      name: "count-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
