import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealDetailsById } from "../api";

export function Meal() {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const hasPreviousState = location.key !== "default";

  useEffect(() => {
    getMealDetailsById(id).then(
      (data) => data.meals[0] && setMealDetails(data.meals[0])
    );
  }, [id]);

  function handleClick() {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="row">
      <div className="card grey darken-3 meal">
        <div className="card-image meal__img">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        </div>
        <div className="card-content white-text meal__information">
          <span className="card-title meal__title">{mealDetails.strMeal}</span>
          <div className="meal__ingredients">
            <table className="meal__ingredients-table centered">
              <thead>
                <tr>
                  <td>Ingredient</td>
                  <td>Measure</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(mealDetails).map((key) => {
                  if (key.includes("strIngredient") && mealDetails[key]) {
                    const strMeasure = "strMeasure" + key.slice(13);
                    return (
                      <tr key={key}>
                        <td>{mealDetails[key]}</td>
                        <td>{mealDetails[strMeasure]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          <p className="meal__reciept">{mealDetails.strInstructions}</p>
        </div>
        <a
          className="waves-effect waves-light deep-orange btn meal__back-btn"
          onClick={handleClick}
        >
          {hasPreviousState ? "Go Back to Meals List" : "Go Home"}
        </a>
      </div>
    </div>
  );
}
