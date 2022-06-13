import { Trash } from "phosphor-react";
import React from "react";
import { toast } from "react-toastify";
import { useStore } from "../store/zustand";
import { CartItem } from "../type/Food";
import { Button } from "./Button";

export const CartCard: React.FC<CartItem> = ({
  id,
  cookedStatus,
  name,
  description,
  price,
  image,
  count,
}) => {
  const removeFromCart = useStore((state) => state.removeFromCart);

  const removeItemHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    removeFromCart(id, cookedStatus);
    toast.success("Removed");
  };

  const setCount = useStore((state) => state.setCount);

  return (
    <li className="flex flex-col justify-center items-center gap-1 px-4 py-4 duration-300 rounded hover:bg-gray-400">
      <img
        className="w-[288px] h-[162px] object-cover"
        src={image}
        alt="food image"
      />
      <p className="font-medium text-lg">{name}</p>
      <p className="font-medium text-gray-700">{description}</p>
      <p className="font-medium text-gray-700">Cooked: {cookedStatus}</p>
      <div className="flex gap-1">
        <p className="font-medium ">Quantity: {count}</p>-
        <p className="font-medium ">Total: ${(price * count).toFixed(2)}</p>
      </div>
      <div className="flex gap-1">
        <Button
          onClick={removeItemHandler}
          color="red"
          size="sm"
          leftIcon={<Trash size={16} color="white" />}
        >
          Remove
        </Button>
        <Button
          onClick={() => setCount(id, cookedStatus, "decrease")}
          outlined
          size="sm"
          color="primary"
        >
          -
        </Button>
        <Button
          onClick={() => setCount(id, cookedStatus, "increase")}
          size="sm"
          color="tropical-blue"
        >
          +
        </Button>
      </div>
    </li>
  );
};
