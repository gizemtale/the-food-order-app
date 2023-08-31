import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext); // to get access to CartContext

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; // I'll call toFixed(2) here to make sure that we always have two decimal places
  const hasItems = cartCtx.items.length > 0; // simply check if CartContext has length greater than zero so if there are items in the cart

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* //instead of hard coded array of cart items, now we can access cartCtx.items to transform these items to items in the Cart */}
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        {/* instead of hard coded value here that's now the real total amount {totalAmount} */}
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>

        {/* I wanna make sure that this Order button (in the Cart) is only showing up if we have items in the Cart. for that we will add const hasItems above  */}
        {/* if hasItems is true, render the button (in the Cart): */}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
