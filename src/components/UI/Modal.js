import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.cartClose(false);
      }}
    />
  );
};
const OverlayCart = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const overlay = document.getElementById("root");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop cartClose={props.cartClose} />, overlay)}
      {ReactDOM.createPortal(
        <OverlayCart>{props.children}</OverlayCart>,
        overlay
      )}
    </>
  );
};

export default Modal;
