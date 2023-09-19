import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const infoCartCtx = useContext(CartContext);

  const totalAmount = `$ ${infoCartCtx.totalAmount.toFixed(2)}`;
  const hasItems = infoCartCtx.items.length > 0;
  const CartItemRemoveHandler = (id) => {
    infoCartCtx.removeItem(id);
  };
  const CartItemAddHandler = (item) => {
    infoCartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {infoCartCtx.items.map((item, index) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={CartItemRemoveHandler.bind(null, item.id)}
            onAdd={CartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal cartClose={props.cartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => {
            props.cartClose(false);
          }}
        >
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={() => {
              alert("Orderrrrrrrrrrrrring!");
            }}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
