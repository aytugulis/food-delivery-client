import React, { useEffect } from "react";
import { CartCard } from "./CartCard";
import { useStore } from "../store/zustand";

export const CartList: React.FC = () => {
  const cart = useStore((state) => state.cart);

  return (
    <>
      <ul className="flex items-center flex-wrap">
        {cart.map(
          ({ cookedStatus, description, id, image, name, price, count }) => (
            <CartCard
              key={id}
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
    </>
  );
};
