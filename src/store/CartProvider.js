import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // I wanna check if an item is already part of the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // this will return us the index of that item if it exist
    const existingCartItem = state.items[existingCartItemIndex]; // this will only work if we have that item already, otherwise it would be null

    let updatedItems;

    if (existingCartItem) {
      // check if an item is already part of the cart items array
      // if existingCartItem is a thing, if this is truthy, which will only be the case if it's already part of the array
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // if an item is added for the first time to that cart items array
      updatedItems = state.items.concat(action.item); // updatedItems arrayimiz. concat, actiondan gelen itemi ekleyerek yeni bir array olusturur. bu action.item’da name, amount gibi gerekli tum datalar var.
    }

    return {
      //new state snapshot
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  //latest state snapshot

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
