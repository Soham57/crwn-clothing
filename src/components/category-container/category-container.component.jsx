import "./category-container.styles.scss";
import CategoryItem from "../category-item/category-item.components";

const CategoryConatiner = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryConatiner;
