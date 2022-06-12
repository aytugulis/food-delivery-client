import { CookingPot } from "phosphor-react";
import { FoodList } from "../components/FoodList";
import { SectionHeader } from "../components/SectionHeader";

export const MainPage = () => {
  return (
    <section className="flex flex-col items-center gap-1 mt-10">
      <SectionHeader
        icon={<CookingPot weight="fill" size={20} />}
        title="Delivery Food"
      />
      <FoodList />
    </section>
  );
};
