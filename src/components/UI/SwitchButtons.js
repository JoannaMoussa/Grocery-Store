import classes from "./SwitchButtons.module.css";

import { useContext } from "react";

import cartDisplayCtx from "../../store/cartDisplay-context";
import cartCtx from "../../store/cart-context";

function SwitchButtons() {
  const cartDisplayContext = useContext(cartDisplayCtx);

  const cartContext = useContext(cartCtx);

  return (
    <div className={classes.btns_container}>
      <button
        className={`${classes.btn} ${
          !cartDisplayContext.showCart ? classes.active_btn : ""
        }`}
        onClick={cartDisplayContext.onSearchBtnClick}
      >
        Products
      </button>
      <button
        className={`${classes.btn} ${
          cartDisplayContext.showCart ? classes.active_btn : ""
        }`}
        onClick={cartDisplayContext.onCartBtnClick}
      >
        Cart
        {cartContext.cartNumItems > 0 && (
          <span
            className={`${classes.notification} ${
              cartDisplayContext.showCart ? classes.active_notification : ""
            }`}
          >
            {cartContext.cartNumItems}
          </span>
        )}
      </button>
    </div>
  );
}

export default SwitchButtons;
