import Introduction from "./Introduction";
import Recipes from "./Recipes";

import classes from "./RecipesPageBody.module.css";

function RecipesPageBody(props) {
  return (
    <div className={classes.recipes_page_body}>
      <Introduction />
      <Recipes recipesFetchResult={props.recipesFetchResult} />
    </div>
  );
}

export default RecipesPageBody;
