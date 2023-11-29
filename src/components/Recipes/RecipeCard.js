import { Link } from "react-router-dom";
import classes from "./RecipeCard.module.css";

function RecipeCard(props) {
  return (
    <Link to={`${props.name}`} className={classes.recipe_card_link}>
      <div className={classes.recipe_card_container}>
        <img
          src={props.image}
          className={classes.recipe_img}
          alt={props.name}
        />
        <div className={classes.name_txt}>{props.name}</div>
        <div className={classes.price_txt}>
          Total Price: <span>${props.totalPrice}</span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
