import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //this will simply make sure that we always render two decimal places

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }); // CartProvider'daki cartContext'in icinde addItem: addItemToCartHandler seklinde tanimli bu functiona ulastik
  }; // here I reach my context (CartProvider icinde)
  // with this we should be triggering that context method whenever that form is submitted.and that should then add items to the Cart

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
        {/* MealItemFormdaki props.onAddToCart ile eslesiyor */}
      </div>
    </li>
  ); //wrapper around every meal item
};

export default MealItem;
