import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {/* App.jsten onClose propu ile hideCartHandler functioninin pointerini getirdik. boylece Close buttonina tiklayinca hideCartHandler calisacak */}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          {/* App.jsten onClose propu ile hideCartHandler functioninin pointerini getirdik. boylece Close buttonina tiklayinca hideCartHandler calisacak */}
          Close
        </button>

        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
