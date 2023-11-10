import classes from "./IngredientsDisplay.module.css";

import SearchComponent from "./SearchComponent";
import IngredientsComponent from "./IngredientsComponent";

import cartDisplayCtx from "../../store/cartDisplay-context";
import { useContext } from "react";

function IngredientsDisplay() {
  const cartDisplayContext = useContext(cartDisplayCtx);

  return (
    <div
      className={`${classes.search_ingr_cont} ${
        cartDisplayContext.showCart ? classes.hide : ""
      }`}
    >
      <SearchComponent />
      <IngredientsComponent />
    </div>
  );
}

export default IngredientsDisplay;
