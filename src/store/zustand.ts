import { CartItem, ExtentedFood } from "./../type/Food";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";

interface BearState {
  cart: CartItem[];
  addToCart: (food: ExtentedFood) => void;
  removeFromCart: (id: string, cookedStatus: string) => void;
  setCount: (
    id: string,
    cookedStatus: string,
    type: "increase" | "decrease"
  ) => void;
}

export const useStore = create<BearState>()(
  devtools(
    persist((set) => ({
      cart: [],
      addToCart: (food) =>
        set((state) => {
          const exists = state.cart.find(
            ({ id, cookedStatus }) =>
              food.id === id && food.cookedStatus === cookedStatus
          );

          if (!exists) return { cart: [...state.cart, { ...food, count: 1 }] };

          const updatedCart = state.cart.map((item) =>
            food.id === item.id && food.cookedStatus === item.cookedStatus
              ? { ...item, count: item.count + 1 }
              : item
          );
          return { cart: updatedCart };
        }),

      removeFromCart: (id, cookedStatus) =>
        set((state) => {
          const filteredCart = state.cart.filter(
            (food) => food.id !== id || food.cookedStatus !== cookedStatus
          );
          return { cart: filteredCart };
        }),

      setCount: (id, cookedStatus, type) =>
        set((state) => {
          const exists = state.cart.findIndex(
            (food) => food.id === id && food.cookedStatus === cookedStatus
          );
          if (exists === -1) return { ...state };

          const food = state.cart[exists];
          if (food.count > 1 && type === "decrease") food.count--;
          else if (type === "increase") food.count++;

          return {
            cart: [...state.cart],
          };
        }),
    }))
  )
);
