import classes from "./MealsItem.module.css";
import MealsForm from "./MealsForm";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

function MealsItem(props) {
  const ctx = useContext(CartContext);

  const formHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsForm id={props.id} formHandler={formHandler} />
      </div>
    </li>
  );
}

export default MealsItem;
