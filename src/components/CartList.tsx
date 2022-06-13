import React from "react";
import { CartCard } from "./CartCard";
import { useStore } from "../store/zustand";

export const CartList: React.FC = () => {
  const cart = useStore((state) => state.cart);

  return (
    <ul className="flex flex-wrap justify-center">
      {cart
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          (
            { cookedStatus, description, id, image, name, price, count },
            index
          ) => (
            <CartCard
              key={index}
              id={id}
              image={image}
              name={name}
              description={description}
              price={price}
              cookedStatus={cookedStatus}
              count={count}
            />
          )
        )}
    </ul>
  );
};
