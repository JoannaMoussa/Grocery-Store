import { useContext } from "react";

import classes from "./IngredientCard.module.css";

import cartCtx from "../../store/cart-context";

export const ingredient_category_to_classname = {
  "Fruits & Veg": "fruits_veg",
  Eggs: "eggs",
  Condiments: "condiments",
  Dairy: "dairy_products",
  Spices: "spices",
  Butchery: "butchery",
  Poultry: "poultry",
  Grains: "grains",
  Oil: "oil",
  Seafood: "seafood",
  Water: "water",
};

function IngredientCard(props) {
  const cartContext = useContext(cartCtx);

  function cartClickHandler() {
    cartContext.addItem({
      name: props.name,
      image: props.image,
      price: props.price,
    });
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

  // findIndex() returns -1 if the condition specified was not met for any element
  const existingCartItemIndex = cartContext.items.findIndex(
    (item) => item.name === props.name
  );

  const itemInCart = existingCartItemIndex !== -1;

  return (
    <div
      className={`${classes.ingredient_card} ${
        !props.show ? classes.hide : ""
      }`}
    >
      <div
        className={`${classes.category} ${
          classes[ingredient_category_to_classname[props.category]] ?? ""
        }`}
      >
        {props.category}
      </div>
      <img
        className={classes.ingredient_img}
        src={props.image}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <p>
        ${props.price}
        <sub>/{props.unit}</sub>
      </p>
      {!itemInCart && (
        <button className={classes.cart_btn} onClick={cartClickHandler}>
          <svg
            className={classes.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#14b8a6"
              d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
            />
          </svg>
        </button>
      )}
      {itemInCart && (
        <div className={classes.item_qty_handler_cont}>
          <button className={classes.icon_btns} onClick={minusClickHandler}>
            <svg
              className={classes.plus_minus_icons}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#030712"
                d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z"
              />
            </svg>
          </button>
          <div className={classes.qty_txt}>
            {cartContext.items[existingCartItemIndex].quantity}
          </div>
          <button className={classes.icon_btns} onClick={plusClickHandler}>
            <svg
              className={classes.plus_minus_icons}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#030712"
                d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default IngredientCard;
