import { Link } from "react-router-dom";

export function CategoriesItem({ category }) {
  return (
    <li className="categories__item collection-item avatar">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="circle"
      />
      <span className="title">{category.strCategory}</span>
      <p>{category.strCategoryDescription.slice(0, 30) + "..."}</p>
      <Link
        to={`/category/${category.strCategory}`}
        className="secondary-content"
      >
        <i className="material-icons">send</i>
      </Link>
    </li>
  );
}
