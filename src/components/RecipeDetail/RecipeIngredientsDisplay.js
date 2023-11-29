import classes from "./RecipeIngredientsDisplay.module.css";

function RecipeIngredientsDisplay(props) {
  return (
    <div className={classes.ingredient_container}>
      <img
        src={props.image}
        alt={props.name}
        className={classes.ingredient_img}
      />
      <div className={classes.name_price_container}>
        <div>{props.name}</div>
        <div className={classes.price_txt}>${props.price}</div>
      </div>
    </div>
  );
}

export default RecipeIngredientsDisplay;
