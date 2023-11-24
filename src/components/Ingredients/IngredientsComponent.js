import classes from "./IngredientsComponent.module.css";

import useScrollWithShadow from "../../hooks/useScrollWithShadow";

import IngredientCard from "./IngredientCard";

function IngredientsComponent(props) {
  const { scrollPosition, onScrollHandler } = useScrollWithShadow();

  return (
    <div
      className={`${classes.ingredients_grid} ${
        scrollPosition.isTop
          ? classes.box_shadow_bottom
          : scrollPosition.isBetween
          ? classes.box_shadow_top_and_bottom
          : scrollPosition.isBottom
          ? classes.box_shadow_top
          : ""
      }`}
      onScroll={onScrollHandler}
    >
      {props.ingredients.map((ingredient) => (
        <IngredientCard
          key={ingredient.name}
          category={ingredient.category}
          image={ingredient.image_url}
          name={ingredient.name}
          price={ingredient.price}
          unit={ingredient.unit}
          quantity={ingredient.quantity}
          show={ingredient.show}
        />
      ))}
    </div>
  );
}

export default IngredientsComponent;
