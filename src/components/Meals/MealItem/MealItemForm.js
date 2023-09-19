import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./mealItemForm.module.css";
const MealItemForm = (props) => {
  const inputAddRef = useRef();
  const [isError, setIsError] = useState(false);
  const onAddHandler = (e) => {
    e.preventDefault();
    const mealAmount = inputAddRef.current.value;
    const mealAmountNumber = +mealAmount;
    if (mealAmount < 1 || mealAmount > 5) {
      setIsError(true);
      return;
    }
    props.addItemHandler(mealAmountNumber);
    setIsError(false);
  };
  return (
    <form className={classes.form} onSubmit={onAddHandler}>
      <Input
        ref={inputAddRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {isError && <p>Please enter a valid amount between 1 - 5</p>}
    </form>
  );
};

export default MealItemForm;
