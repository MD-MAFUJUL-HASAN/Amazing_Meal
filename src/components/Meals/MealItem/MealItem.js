import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./mealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const addItemCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addItemHandler = (itemNumber) => {
    const item = {
      id: props.id,
      price: props.price,
      amount: itemNumber,
      name: props.name,
    };
    addItemCtx.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addItemHandler={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
