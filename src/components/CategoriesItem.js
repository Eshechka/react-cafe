export function CategoriesItem({ category }) {
  return (
    <li className="categories__item collection-item avatar">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="circle"
      />
      <span className="title">{category.strCategory}</span>
      <p></p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">send</i>
      </a>
    </li>
  );
}
