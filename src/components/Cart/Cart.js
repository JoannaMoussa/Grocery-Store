import classes from "./Cart.module.css";

import CartComponent from "./CartComponent";

import { useContext } from "react";

import cartDisplayCtx from "../../store/cartDisplay-context";
import cartCtx from "../../store/cart-context";

function Cart() {
  const cartDisplayContext = useContext(cartDisplayCtx);
  const cartContext = useContext(cartCtx);

  return (
    <div
      className={`${classes.cart_container} ${
        !cartDisplayContext.showCart ? classes.hide : ""
      }`}
    >
      <h1 className={classes.h1}>Your Cart: {cartContext.totalQty} Products</h1>
      <div className={classes.total_checkout_container}>
        <div className={classes.total_txt}>
          Total: <span>${cartContext.totalPrice}</span>
        </div>
        <button>Checkout</button>
      </div>
      <div className={classes.cart_ingredients_container}>
        {cartContext.items.map((item) => (
          <CartComponent
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
