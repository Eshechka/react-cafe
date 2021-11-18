// import { useEffect, useState } from "react";

export function MealsList({ meals }) {
  return (
    <div className="row meal__list">
      {meals.map((meal) => {
        return (
          <div key={meal.idMeal} className="meal__item">
            {/* <div key={meal.idMeal} className="col s12 m6 meal__item"> */}
            <div className="card">
              <div className="card-image">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className="card-content">
                <p>{meal.strMeal}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
