import CartContext from "./cart-context";
import { useReducer } from "react";
// useReducer kullanicaz cunku biraz complex state. once eklenmek istenen item daha once eklenmis mi diye bakicak varsa amountunu guncellicek yoksa yeni olusturcak, removing de oldukca complex
const defaultCartState = {
  items: [],
  totalAmount: 0,
}; // default state olusturduk

// reducer functioni componentin disina yaziyoruz
// cartReducer functioni, state snapshot (updated object) ve dispatch edilen actioni alip yeni bir state snapshot veriyor
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //gelen actionin typeina gore return edicek
    const updatedItems = state.items.concat(action.item); // updatedItems arrayimiz olsun.  concat, actiondan gelen itemi ekleyerek yeni bir array olusturur. bu action.item’da name, amount gibi gerekli tum datalar var.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //actiondan gelen itemin amountu ile priceini carpip toplama ekliyor
    return {
      //new state
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
  ); //useReducer, cartState’i (state snapshot’i) ve actioni alip dispatchCartAction ile cartReducer’a gonderiyor ve cartReducer new state snapshot return ediyor. defaultCartState de state snapshot icin initial deger

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item }); //cartReducera itemi icinde bulunduran bir action gonderiyor
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items, //contexti update etmis oluyorum
    totalAmount: cartState.totalAmount, //contexti update etmis oluyorum
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  // update edilen context, latest state snapshot

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
    // boyle yazarak butun childlarin value'ya yazdigimiz cartContext'e yani latest snapshota ulasmasini sagladik
  );
};

export default CartProvider;
