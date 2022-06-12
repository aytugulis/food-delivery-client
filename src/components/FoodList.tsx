import React from "react";
import { FoodCard } from "./FoodCard";

export const FoodList: React.FC = () => {
  return (
    <ul className="flex items-center flex-wrap gap-y-4 mx-5 lg:w-11/12 w-4/5">
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
      <FoodCard
        image="https://www.magesolution.com/blog/wp-content/uploads/2019/11/food-blog_title-555x270.jpg"
        name="Hamburger"
        description="Boiled meat..."
        price="$10"
      />
    </ul>
  );
};
