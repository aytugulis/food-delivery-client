import { CookingPot } from "phosphor-react";
import { Button } from "../components/Button";
import { FoodList } from "../components/FoodList";
import { SectionHeader } from "../components/SectionHeader";

export const CardPage = () => {
  return (
    <section className="flex">
      <div className="flex flex-col items-center gap-1 mt-10">
        <SectionHeader
          icon={<CookingPot weight="fill" size={20} />}
          title="My Cart"
        />
        <FoodList />
      </div>
      <div className="flex flex-col items-center gap-4 w-52 bg-gray-400 border-l-2 border-primary">
        <div>
          <h2 className="font-bold">Total</h2>
          <p>Delivery Fee: $8</p>
          <p>Tax: $8</p>
        </div>
        <Button color="secondary">Order $12</Button>
      </div>
    </section>
  );
};
