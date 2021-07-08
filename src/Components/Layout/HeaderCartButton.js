import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

function HeaderCartButton(props) {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {ctx.items.reduce((cur, item) => {
          return cur + item.amount;
        }, 0)}
      </span>
    </button>
  );
}

export default HeaderCartButton;
