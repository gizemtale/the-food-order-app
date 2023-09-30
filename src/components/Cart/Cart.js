import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext); // to get access to CartContext

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; // I'll call toFixed(2) here to make sure that we always have two decimal places
  const hasItems = cartCtx.items.length > 0; // simply check if there are items in the cart

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* //instead of hard coded array of cart items, now we can access cartCtx.items to transform these items to items in the Cart */}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id} // we need to pass a key since its a list
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} // CartItem.jsin icindeki <button onClick={props.onRemove}>−</button> ile eslesiyor
          // bind ensures that the id of the to be added or removed item is passed here to remove handler
          onAdd={cartItemAddHandler.bind(null, item)} //here you should also call bind and pass the overall item
          // bind pre-configure as a function for future execution and basically allows you to pre-configure the argument that function will receive when it's being executed. and that's something we need here to ensure that both these functions do receive the ID or the item respectively
        />
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
