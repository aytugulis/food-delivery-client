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
  return (
    <li className="flex flex-col justify-center items-center gap-1 px-4 py-4 duration-300 rounded hover:bg-gray-400">
      <img
        className="w-[288px] h-[162px] object-cover"
        src={image}
        alt="food image"
      />
      <p className="font-medium text-lg">{name}</p>
      <p className="font-medium text-gray-700">{description}</p>
      <p className="font-medium text-gray-700">Quantity:{count}</p>
      <p className="font-medium text-gray-700">Cooked: {cookedStatus}</p>
      <p className="font-medium text-lg">${price}</p>
      <Button
        onClick={removeItemHandler}
        color="red"
        size="sm"
        leftIcon={<Trash size={16} color="white" />}
      >
        Remove
      </Button>
    </li>
  );
};
