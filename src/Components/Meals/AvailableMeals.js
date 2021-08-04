import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://foodorderingapp-aad27-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const loadMeals = [];
      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
    }
    fetchMeals();
  }, []);
  const availmeals = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{availmeals}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
