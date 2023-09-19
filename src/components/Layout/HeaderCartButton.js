import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/IconCart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/cart-context";
const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const itemAmount = useContext(CartContext);
  const { items } = itemAmount;
  const numberofItem = itemAmount.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnAnimation = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={btnAnimation}
      onClick={() => {
        props.cartClicked(true);
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofItem}</span>
    </button>
  );
};

export default HeaderCartButton;
