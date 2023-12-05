import { Fragment, useContext } from "react";

import cartCtx from "../../store/cart-context";

import classes from "./CartComponent.module.css";

import { motion } from "framer-motion";

function CartComponent(props) {
  const cartContext = useContext(cartCtx);

  function binClickHandler() {
    cartContext.deleteItem(props.name);
  }

  function minusClickHandler() {
    cartContext.removeItem(props.name);
  }

  function plusClickHandler() {
    cartContext.addItem({
      name: props.name,
      image: props.image,
      price: props.price,
    });
  }

  const binIcon = {
    rest: { stroke: "#090f1d", duration: 0.1 },
    hover: {
      stroke: "#e9454d",
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Fragment>
      <motion.div
        className={classes.ingredient_container}
        initial={{ opacity: 0, x: 50, boxShadow: "inset 0px 0px #090f1d" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
        exit={{ opacity: 0, x: 50 }}
        whileHover={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
      >
        <img
          className={classes.ingredient_img}
          src={props.image}
          alt={props.name}
        />
        <div className={classes.ingredient_details_container}>
          <div className={classes.name_bin_container}>
            <div className={classes.ingredient_name} title={props.name}>
              {props.name}
            </div>
            <motion.button
              className={classes.icon_btns}
              onClick={binClickHandler}
              initial="rest"
              whileHover="hover"
            >
              <svg
                className={classes.bin_icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.g
                  variants={binIcon}
                  fill="none"
                  stroke="#030712"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"
                  />
                  <path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" />
                </motion.g>
              </svg>
            </motion.button>
          </div>
          <div className={classes.qty_price_container}>
            <div className={classes.price_container}>
              ${props.price * props.quantity}
            </div>
            <div className={classes.ingredient_qty_container}>
              <motion.button
                className={classes.icon_btns}
                onClick={minusClickHandler}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 1.2, transition: { duration: 0.1 } }}
              >
                <svg
                  className={classes.minus_plus_icons}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#030712"
                    d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z"
                  />
                </svg>
              </motion.button>
              <div>{props.quantity}</div>
              <motion.button
                className={classes.icon_btns}
                onClick={plusClickHandler}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 1.2, transition: { duration: 0.1 } }}
              >
                <svg
                  className={classes.minus_plus_icons}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#030712"
                    d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
}

export default CartComponent;
