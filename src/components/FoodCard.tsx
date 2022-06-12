import { Plus } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./Badge";

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <li className="flex flex-col lg:flex-row justify-center gap-x-5 gap-y-2 items-center lg:basis-1/3 md:basis-1/2 basis-full py-4 duration-300 rounded hover:bg-gray-400">
      <img
        className="w-[288px] h-[162px] lg:w-[160px] lg:h-[90px] object-cover"
        src={image}
        alt="food image"
      />
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-medium text-gray-700">{description}</p>
        <p className="font-medium text-lg">{price}</p>
      </div>

      <Badge color="primary" className="cursor-pointer">
        <Plus size={16} />
      </Badge>
    </li>
  );
};
