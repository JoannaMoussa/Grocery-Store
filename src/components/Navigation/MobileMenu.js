import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MobileMenu.module.css";

import cartCtx from "../../store/cart-context";

function MobileMenu(props) {
  const cartContext = useContext(cartCtx);

  return (
    <div
      className={`${classes.mobile_menu} ${!props.show ? classes.hide : ""}`}
    >
      <div className={classes.icon_container}>
        <svg
          onClick={() => props.onClick("hide")}
          className={classes.close_btn}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            fillRule="evenodd"
            d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"
          />
        </svg>
      </div>

      <h1>Menu</h1>
      <nav>
        <ul className={classes.navlinks}>
          <li>
            <NavLink
              to="/Grocery-Store/"
              onClick={() => props.onClick("hide")}
              className={({ isActive }) =>
                isActive ? classes.navlink__active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Grocery-Store/shop/"
              onClick={() => props.onClick("hide")}
              className={({ isActive }) =>
                isActive ? classes.navlink__active : undefined
              }
              end
            >
              Shop
            </NavLink>
            {cartContext.totalQty > 0 && (
              <span className={classes.notification}>
                {cartContext.totalQty}
              </span>
            )}
          </li>
          <li>
            <NavLink
              to="/Grocery-Store/recipes/"
              onClick={() => props.onClick("hide")}
              className={({ isActive }) =>
                isActive ? classes.navlink__active : undefined
              }
              end
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
