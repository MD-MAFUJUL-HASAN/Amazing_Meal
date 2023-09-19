import React from "react";
import classes from "./header.module.css";
import mealPicture from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Amazing Meal</h1>

        <HeaderCartButton cartClicked={props.cartClicked} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealPicture} alt="A big giant meal table" />
      </div>
    </>
  );
};

export default Header;
