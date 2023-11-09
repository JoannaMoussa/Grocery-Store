import classes from "./Cart.module.css";

import { useContext } from "react";

import cartDisplayCtx from "../../store/cartDisplay-context";

function Cart() {
  const cartDisplayContext = useContext(cartDisplayCtx);

  return (
    <div
      className={`${classes.cart_container} ${
        !cartDisplayContext.showCart ? classes.hide : ""
      }`}
    >
      Cart
    </div>
  );
}

export default Cart;
