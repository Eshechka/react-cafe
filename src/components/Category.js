import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { filterByCategory } from "../api";

import { Preloader } from "./Preloader";
import { MealsList } from "./MealsList";

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const hasPreviousState = location.key !== "default";

  const handleClick = () => {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    filterByCategory(name).then((data) => data.meals && setMeals(data.meals));
  }, [name]);

  return (
    <>
      <a
        className="waves-effect waves-light deep-orange btn"
        onClick={handleClick}
      >
        {hasPreviousState ? "Go Back to Categories List" : "Go Home"}
      </a>
      {meals.length ? (
        <MealsList meals={meals} nameCategoryMeals={name} />
      ) : (
        <Preloader />
      )}
    </>
  );
}
