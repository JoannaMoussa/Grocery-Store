import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

import classes from "./MainNavigation.module.css";

import MobileMenu from "./MobileMenu";

function MainNavigation() {
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
            className={classes.cart}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M48 80h64l48 272h256"
            />
            <path
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
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
                  to="/Grocery-Store"
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
                  to="/Grocery-Store/shop"
                  className={({ isActive }) =>
                    isActive ? classes.navlink__active : undefined
                  }
                  end
                >
                  Shop
                </NavLink>
                <span className={classes.notification}>1</span>
              </li>
              <li>
                <NavLink
                  to="/Grocery-Store/recipes"
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
