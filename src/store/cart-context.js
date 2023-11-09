import React, { useState } from "react";

const cartCtx = React.createContext({
  cartNumItems: 0,
});

export function CartCtxProvider(props) {
  const [cartNumItems, setCartNumItems] = useState(0);

  return (
    <cartCtx.Provider
      value={{
        cartNumItems,
      }}
    >
      {props.children}
    </cartCtx.Provider>
  );
}

export default cartCtx;
