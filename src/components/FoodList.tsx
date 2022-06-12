import React from "react";
import { FoodCard } from "./FoodCard";
import { Food } from "../type/Food";
import axios from "axios";
import { useQuery } from "react-query";
import { Loading } from "./Loading";

export const FoodList: React.FC = () => {
  const { isLoading, data } = useQuery<Food[], Error>("foods", async () => {
    const { data } = await axios.get("http://localhost:5000/food");
    return data.foods;
  });

  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex items-center flex-wrap gap-y-4 mx-5 lg:w-11/12 w-4/5">
        {data?.map(({ id, name, description, price, image }) => (
          <FoodCard
            key={id}
            id={id}
            image={image}
            name={name}
            description={description}
            price={price}
          />
        ))}
      </ul>
    </>
  );
};
