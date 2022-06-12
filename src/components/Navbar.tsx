import { Brand } from "./Brand";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around py-3 bg-gradient-to-r from-primary-700 via-primary-400  to-primary-700">
      <Brand />
      <ul className="flex items-center gap-3">
        <li className="group text-white">
          <Link className="flex items-center gap-1" to="/cart">
            <ShoppingCart className="text-secondary" weight="fill" size={20} />
            <h2 className="group-hover:border-b-2 group-hover:border-secondary">
              My Cart
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
