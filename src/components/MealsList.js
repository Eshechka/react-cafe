import { Link } from "react-router-dom";

export function MealsList({ meals, nameCategoryMeals }) {
  return (
    <div className="row meal__list">
      {meals.map((meal) => {
        return (
          <div key={meal.idMeal} className="meal__item">
            <div className="card">
              <div className="card-image">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className="card-content">
                <p>{meal.strMeal}</p>
              </div>
              <div className="card-action">
                <Link to={`/category/${nameCategoryMeals}/meal/${meal.idMeal}`}>
                  Reciept
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
