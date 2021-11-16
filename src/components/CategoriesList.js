import { CategoriesItem } from "./CategoriesItem";

export function CategoriesList({ categories }) {
  return (
    <div className="categories">
      <div className="categories__title collection-header">
        <h4>Categories</h4>
      </div>
      <ul className="categories__list collection">
        {categories.map((category) => {
          return (
            <CategoriesItem key={category.idCategory} category={category} />
          );
        })}
      </ul>
    </div>
  );
}
