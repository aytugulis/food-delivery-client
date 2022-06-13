import { useStore } from "../store/zustand";
import { Button } from "./Button";

export const Menu = () => {
  const cart = useStore((state) => state.cart);
  const subTotal = cart.reduce((res, item) => {
    return res + item.price * item.count;
  }, 0);
  const tax = subTotal / 10;

  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-center gap-6 p-5 bg-gray-200 shadow border-t-4 border-tropical-blue rounded-lg">
      <h2 className="font-bold">Summary</h2>
      <div>
        <div className="flex gap-1">
          Delivery Fee: <p className="line-through">$2</p>
          <p className="text-tropical-blue font-semibold">Free!</p>
        </div>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h2 className="font-semibold">Subtotal ${subTotal.toFixed(2)}</h2>
      </div>
      <Button color="tropical-blue" size="lg">
        Continue ${(subTotal + tax).toFixed(2)}
      </Button>
    </div>
  );
};
