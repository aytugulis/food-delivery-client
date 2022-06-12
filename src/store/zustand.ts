import { Food } from "./../type/Food";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  cart: Food[];
  addToCart: (food: Food) => void;
}

export const useStore = create<BearState>()(
  devtools(
    persist((set) => ({
      cart: [],
      addToCart: (food) =>
        set((state) => {
          state.cart.push(food);
          return { cart: state.cart };
        }),
    }))
  )
);
