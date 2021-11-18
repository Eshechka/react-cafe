import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealDetailsById } from "../api";

export function Meal() {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    getMealDetailsById(id).then(
      (data) => data.meals[0] && setMealDetails(data.meals[0])
    );
  }, [id]);

  return (
    <div className="row">
      <div className="card grey darken-3">
        <div className="card-image">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        </div>
        <div className="card-content white-text">
          <span className="card-title">{mealDetails.strMeal}</span>
          <p>{mealDetails.strInstructions}</p>
        </div>
        {/* <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
      </div>
    </div>
  );
}
