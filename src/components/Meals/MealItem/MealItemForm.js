import { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true); // valid mi degil mi sadece buna bakan basit bir useState
  const amountInputRef = useRef(); // Inputun icine verdigimiz amountInputRef ile eslesiyor

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //bununla inputa girilen value'ya ulasiyoruz.
    const enteredAmountNumber = +enteredAmount; // girilen value sayi bile olsa hep string oldugu icin burada numbera ceviriyoruz

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false); // valid degilse statei false yapicak
      return; // valid degilse bos return edicek yani calismaya devam etmicek. yani submitHandler functioni yalnizca input valid ise tamamlanicak
    }

    props.onAddToCart(enteredAmountNumber); // input valid ise burasi calisacak
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      {/* input valid degilse boyle bir error message cikicak */}
    </form>
  );
};

export default MealItemForm;
