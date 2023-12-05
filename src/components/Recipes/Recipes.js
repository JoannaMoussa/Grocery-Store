import classes from "./Recipes.module.css";

import LoadingIndicator from "../UI/LoadingIndicator";
import RecipesFetchError from "./RecipesFetchError";
import RecipeCard from "./RecipeCard";
import { Fragment } from "react";

import { motion } from "framer-motion";

function Recipes(props) {
  return (
    <Fragment>
      {props.recipesFetchResult.status === "pending" && (
        <div className={classes.loading_error_container}>
          <LoadingIndicator />
        </div>
      )}
      {props.recipesFetchResult.status === "error" && (
        <div className={classes.loading_error_container}>
          <RecipesFetchError message={props.recipesFetchResult.error.message} />
        </div>
      )}

      {props.recipesFetchResult.status === "success" && (
        <motion.div
          className={classes.recipes_container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          {props.recipesFetchResult.recipes.map((recipe) => (
            <RecipeCard
              key={recipe.name}
              name={recipe.name}
              image={recipe.image_url}
              totalPrice={recipe.totalPrice}
            />
          ))}
        </motion.div>
      )}
    </Fragment>
  );
}

export default Recipes;
