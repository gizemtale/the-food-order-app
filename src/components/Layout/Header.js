import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {/* we wanna execute showCartHandler function (onShowCart propsu ile Appten gelen) whenever HeaderCartButton is clicked*/}
        {/* props olarak onClick adini verdik */}
        {/* simdi bu onClick propunu da HeaderCartButtona gonderiyoruz */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
