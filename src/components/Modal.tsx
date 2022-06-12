import { Plus, X } from "phosphor-react";
import React from "react";
import { Button } from "./Button";
import { Food } from "../type/Food";

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
  return (
    <div className="fixed w-full h-full top-0 left-0">
      <div className="flex flex-col items-center justify-between absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-gray-200 py-10 rounded-lg shadow">
        <div className="flex flex-col items-center">
          <h1>{name}</h1>
          <h1>{description}</h1>
        </div>

        <select>
          <option disabled selected>
            Food is cooked
          </option>
          <option>rare</option>
          <option>medium</option>
          <option>well-done</option>
        </select>

        <div className="flex gap-2">
          <Button
            leftIcon={<Plus size={16} weight="fill" color="white" />}
            color="tropical-blue"
            size="sm"
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
