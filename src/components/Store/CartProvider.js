import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const newAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const exisitingItem = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const hasValueExisit = state.items[exisitingItem];
    if (hasValueExisit) {
      const updatedItem = {
        ...hasValueExisit,
        amount: hasValueExisit.amount + action.item.amount,
      };
      const newItemsUpdate = [...state.items];
      newItemsUpdate[exisitingItem] = updatedItem;
      return { items: newItemsUpdate, totalAmount: newAmount };
    } else {
      const newItems = [...state.items, action.item];
      return { items: newItems, totalAmount: newAmount };
    }
  }
  if (action.type === "REMOVE") {
    const seachforId = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    let newTotalAmount = state.totalAmount - state.items[seachforId].price;
    const itemsIsearchFor = { ...state.items[seachforId] };

    itemsIsearchFor.amount--;
    let newUpdatedItems;
    if (itemsIsearchFor.amount === 0) {
      newUpdatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      newUpdatedItems = [...state.items];
      newUpdatedItems[seachforId] = itemsIsearchFor;
    }
    newTotalAmount = newTotalAmount < 0 ? 0 : newTotalAmount;
    return { items: newUpdatedItems, totalAmount: newTotalAmount };
  }
  return initialState;
};
const CartProvider = (props) => {
  const [cartState, dispatchofReducer] = useReducer(cartReducer, initialState);
  const addItemHandler = (item) => {
    dispatchofReducer({ type: "Add", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchofReducer({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
