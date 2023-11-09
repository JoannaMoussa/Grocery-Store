import React, { useState } from "react";

const cartDisplayCtx = React.createContext({
  showCart: false,
  onSearchBtnClick: () => {},
  onCartBtnClick: () => {},
});

export function CartDisplayCtxProvider(props) {
  const [showCart, setShowCart] = useState(false);

  function searchClickHandler() {
    setShowCart(false);
  }

  function cartClickHandler() {
    setShowCart(true);
  }

  return (
    <cartDisplayCtx.Provider
      value={{
        showCart,
        onSearchBtnClick: searchClickHandler,
        onCartBtnClick: cartClickHandler,
      }}
    >
      {props.children}
    </cartDisplayCtx.Provider>
  );
}

export default cartDisplayCtx;
