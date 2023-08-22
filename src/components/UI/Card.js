import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>; //wraps props children so that whatever is passed between the opening and closing tag of the Card Component is in the end used inside of Card
};

export default Card;
