import { Hamburger } from "phosphor-react";
import { Link } from "react-router-dom";

export const Brand = () => {
  return (
    <Link className="flex items-center gap-1 group" to="/">
      <Hamburger
        className="text-white group-hover:text-secondary duration-500"
        weight="fill"
        size={30}
      />
      <h1 className="group-hover:text-secondary duration-500 text-2xl text-white border-secondary">
        Food Delivery
      </h1>
    </Link>
  );
};
