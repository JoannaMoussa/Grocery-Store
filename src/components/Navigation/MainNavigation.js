import { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

import classes from "./MainNavigation.module.css";

import MobileMenu from "./MobileMenu";

import cartCtx from "../../store/cart-context";

function MainNavigation() {
  const cartContext = useContext(cartCtx);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function clickHandler(action) {
    if (action === "show") {
      setShowMobileMenu(true);
    } else if (action === "hide") {
      setShowMobileMenu(false);
    }
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <MobileMenu show={showMobileMenu} onClick={clickHandler} />,
        document.getElementById("mobile-menu")
      )}

      <header className={classes.header}>
        <div className={classes.logo}>
          <svg
            className={classes.logo_icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M16 21q-2.077 0-3.538-1.462Q11 18.077 11 16t1.462-3.538Q13.923 11 16 11t3.538 1.462Q21 13.923 21 16t-1.462 3.538Q18.077 21 16 21Zm0-1q1.65 0 2.825-1.175T20 16q0-1.65-1.175-2.825T16 12q-1.65 0-2.825 1.175T12 16q0 1.65 1.175 2.825T16 20ZM4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385v-6.87q0-.2.076-.457q.076-.258.15-.458l2.232-4.985h-.804q-.329 0-.51-.181q-.182-.182-.182-.51v-.232q0-.329.181-.51Q4.325 3 4.653 3h5.693q.329 0 .51.182q.182.181.182.51v.231q0 .329-.181.51q-.182.182-.51.182h-.805l2.496 5.647q-.205.115-.41.275q-.203.16-.405.355L8.47 4.615H6.531L4 10.342v7.043q0 .269.173.442t.442.173h4.673q.068.275.175.528q.106.253.233.472h-5.08ZM16 9.615q-.646-.173-1.073-.696q-.427-.523-.427-1.227t.427-1.227q.427-.523 1.073-.696v3.846q.173-.646.696-1.073q.523-.427 1.227-.427t1.227.427q.523.427.696 1.073H16Z"
            />
          </svg>
          <p>FooDelivery</p>
        </div>

        <svg
          onClick={() => clickHandler("show")}
          className={classes.bars}
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            fillRule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z"
            clipRule="evenodd"
          />
        </svg>

        <div className={classes.navbar}>
          <nav>
            <ul className={classes.navlinks}>
              <li>
                <NavLink
                  to="/Grocery-Store/"
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
                  className={({ isActive }) =>
                    isActive ? classes.navlink__active : undefined
                  }
                  end
                >
                  Shop
                </NavLink>
                {cartContext.cartNumItems > 0 && (
                  <span className={classes.notification}>
                    {cartContext.cartNumItems}
                  </span>
                )}
              </li>
              <li>
                <NavLink
                  to="/Grocery-Store/recipes/"
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
      </header>
    </Fragment>
  );
}

export default MainNavigation;
