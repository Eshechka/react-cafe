import { useParams } from "react-router-dom";
import { filterByCategory } from "../api";
import { useEffect, useState } from "react";

import { Preloader } from "./Preloader";
import { MealsList } from "./MealsList";

export function Category() {
  let { name } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    filterByCategory(name).then((data) => data.meals && setMeals(data.meals));
  }, [name]);

  return meals.length ? <MealsList meals={meals} /> : <Preloader />;
}
