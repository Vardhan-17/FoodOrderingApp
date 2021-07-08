import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCart = { items: [], amount: 0 };

function cartHandler(state, action) {
  if (action.type === "ADD") {
    let cart;
    const amount = state.amount + action.item.amount * action.item.price;
    const itemExist = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[itemExist];
    if (existingItem) {
      const updateItem = {
        ...state.items[itemExist],
        amount: existingItem.amount + action.item.amount,
      };
      cart = [...state.items];
      cart[itemExist] = updateItem;
    } else {
      cart = state.items.concat(action.item);
    }
    return {
      items: cart,
      amount: amount
    };
  }
  if (action.type === "DEL") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.amount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      amount: updatedTotalAmount
    };
  }
  return defaultCart;
}

function CartProvider(props) {
  const [cartctx, dispatchCartHandler] = useReducer(cartHandler, defaultCart);
  function addItemHandler(item) {
    dispatchCartHandler({ type: "ADD", item: item });
  }

  function delItemHandler(id) {
    dispatchCartHandler({ type: "DEL", id: id });
  }

  const cart1 = {
    items: cartctx.items,
    amount: cartctx.amount,
    addItem: addItemHandler,
    delItem: delItemHandler,
  };

  return (
    <CartContext.Provider value={cart1}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
