import { Fragment, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/Grocery-Store/" className={classes.logo_link}>
          <div className={classes.logo}>
            <svg
              className={classes.logo_icon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#030712"
                d="M10.546 11H7.95h5.096h-2.5Zm-5.161 7q-1.672 0-2.836-1.164Q1.385 15.67 1.385 14t1.164-2.836Q3.713 10 5.385 10h11.83l-2.827-2.827q-.096-.096-.201-.135Q14.08 7 13.965 7h-2.08q-.214 0-.357-.143q-.143-.144-.143-.357t.143-.357Q11.67 6 11.885 6h2.075q.323 0 .627.13q.305.132.523.349l3.532 3.533q1.662-.004 2.818 1.161q1.155 1.165 1.155 2.827q0 1.671-1.164 2.836T18.615 18q-1.67 0-2.835-1.164T14.615 14q0-.777.351-1.474t.91-1.238h-1.691l-2.97 2.97q-.13.13-.27.186q-.14.056-.3.056H9.322Q9.165 16 8.04 17t-2.655 1Zm13.23-1q1.25 0 2.125-.875T21.615 14q0-1.25-.875-2.125T18.615 11q-1.25 0-2.125.875T15.615 14q0 1.25.875 2.125t2.125.875Zm-13.23 0q1.103 0 1.933-.713q.83-.714 1.02-1.787H5.885q-.214 0-.357-.143q-.143-.144-.143-.357t.143-.357q.143-.143.357-.143h2.453q-.19-1.073-1.02-1.787Q6.488 11 5.385 11q-1.25 0-2.125.875T2.385 14q0 1.25.875 2.125T5.385 17Zm3.988-3.5h1.173l2.5-2.5H7.95q.606.444.98 1.098q.376.654.443 1.402Z"
              />
            </svg>
            <p>FooDelivery</p>
          </div>
        </Link>

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
                {cartContext.totalQty > 0 && (
                  <span className={classes.notification}>
                    {cartContext.totalQty}
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
