import React, { useEffect, useReducer } from "react";

const cartCtx = React.createContext({
  items: [],
  totalPrice: 0,
  totalQty: 0,
  addItem: (item) => {},
  removeItem: (name) => {},
  deleteItem: (name) => {},
});

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

function cartStateInit() {
  if (localStorage.getItem("cartCtx") !== null) {
    return JSON.parse(localStorage.getItem("cartCtx"));
  } else {
    return defaultCartState;
  }
}

function addToLocalStorage(newState) {
  localStorage.setItem("cartCtx", JSON.stringify(newState));
}

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    let updatedItem;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
        quantity: 1,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    const updatedTotalPrice = state.totalPrice + action.item.price;
    const updatedTotalQty = state.totalQty + 1;

    const newState = {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalQty: updatedTotalQty,
    };
    return newState;
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.name === action.name
    );
    const existingItem = state.items[existingCartItemIndex];

    if (existingItem) {
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.name !== action.name);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      const updatedTotalPrice = state.totalPrice - existingItem.price;
      const updatedTotalQty = state.totalQty - 1;

      const newState = {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalQty: updatedTotalQty,
      };
      return newState;
    } else {
      // handle the case where the item to be removed was not found in the cart
      return state;
    }
  }

  if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.name === action.name
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItems = state.items.filter(
        (item) => item.name !== action.name
      );
      const updatedTotalPrice =
        state.totalPrice - existingCartItem.price * existingCartItem.quantity;
      const updatedTotalQty = state.totalQty - existingCartItem.quantity;

      const newState = {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalQty: updatedTotalQty,
      };

      return newState;
    } else {
      // handle the case where the item to be deleted was not found in the cart
      return state;
    }
  }

  console.log(`[Warning] Recieved unhandled action: ${action.type}`);
  return state;
}

export function CartCtxProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    null,
    cartStateInit
  );

  useEffect(() => {
    addToLocalStorage(cartState);
  }, [cartState]);

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  // substract by 1 the quantity of the cart item
  function removeItemFromCartHandler(name) {
    dispatchCartAction({ type: "REMOVE", name: name });
  }

  // Delete the item from the cart
  function deleteItemFromCartHandler(name) {
    dispatchCartAction({ type: "DELETE", name: name });
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQty: cartState.totalQty,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <cartCtx.Provider value={cartContext}>{props.children}</cartCtx.Provider>
  );
}

export default cartCtx;
