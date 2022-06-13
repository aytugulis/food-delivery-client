import { Plus, X } from "phosphor-react";
import React, { useState } from "react";
import { Button } from "./Button";
import { Food } from "../type/Food";
import { useStore } from "../store/zustand";
import { toast } from "react-toastify";

interface ModalProps extends Food {
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({
  name,
  description,
  id,
  image,
  price,
  setIsModelOpen,
}) => {
  const [cookedStatus, setCookedStatus] = useState("medium");
  const addToCart = useStore((state) => state.addToCart);

  const addItemHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addToCart({ name, description, id, image, price, cookedStatus });
    toast.success("Successful");
    setIsModelOpen(false);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0">
      <div className="flex flex-col items-center justify-between absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-gray-200 py-10 rounded-lg shadow">
        <div className="flex flex-col items-center">
          <h1>{name}</h1>
          <h1>{description}</h1>
        </div>

        <div>
          <label>Food is cooked: </label>
          <select onChange={(e) => setCookedStatus(e.target.value)}>
            <option value="medium">medium</option>
            <option value="well-done">well-done</option>
          </select>
        </div>

        <div className="flex gap-2">
          <Button
            leftIcon={<Plus size={16} weight="fill" color="white" />}
            color="tropical-blue"
            size="sm"
            onClick={addItemHandler}
          >
            Add
          </Button>
          <Button
            rightIcon={<X size={16} weight="fill" color="white" />}
            color="primary"
            size="sm"
            onClick={() => setIsModelOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
