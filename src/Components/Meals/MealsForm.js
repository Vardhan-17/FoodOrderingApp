import classes from "./MealsForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

function MealsForm(props) {
  const amountref = useRef();

  function formHandler(event) {
    event.preventDefault();
    props.formHandler(amountref.current.value);
  }

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <Input
        label="Amount"
        ref={amountref}
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
    </form>
  );
}

export default MealsForm;
