import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
  /* App.jsten Cart'a, Cart'tan buraya onClose propu ile hideCartHandlerin pointerini getirdik */
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // index.htmldeki div

const Modal = (props) => {
  return (
    <>
      {/* ilk arguman what to Portal, ikinci arguman where to Portal it */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {/* App.jsten Cart'a, Cart'tan buraya onClose propu ile hideCartHandlerin pointerini getirdik */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
