import classes from "./SwitchButtons.module.css";

import { useContext } from "react";

import cartDisplayCtx from "../../store/cartDisplay-context";
import cartCtx from "../../store/cart-context";

import { motion } from "framer-motion";

function SwitchButtons() {
  const cartDisplayContext = useContext(cartDisplayCtx);

  const cartContext = useContext(cartCtx);

  return (
    <div className={classes.btns_container}>
      <motion.button
        className={`${classes.btn} ${
          !cartDisplayContext.showCart ? classes.active_btn : ""
        }`}
        onClick={cartDisplayContext.onSearchBtnClick}
        whileHover={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
      >
        Products
      </motion.button>
      <motion.button
        className={`${classes.btn} ${
          cartDisplayContext.showCart ? classes.active_btn : ""
        }`}
        onClick={cartDisplayContext.onCartBtnClick}
        whileHover={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
      >
        Cart
        {cartContext.totalQty > 0 && (
          <span
            className={`${classes.notification} ${
              cartDisplayContext.showCart ? classes.active_notification : ""
            }`}
          >
            {cartContext.totalQty}
          </span>
        )}
      </motion.button>
    </div>
  );
}

export default SwitchButtons;
