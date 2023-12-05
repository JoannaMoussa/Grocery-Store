import ReactDOM from "react-dom";
import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import LoadingIndicator from "../UI/LoadingIndicator";
import RecipesFetchError from "../Recipes/RecipesFetchError";
import RecipeIngredientsDisplay from "./RecipeIngredientsDisplay";
import PopupMessage from "../UI/PopupMessage";

import cartCtx from "../../store/cart-context";

import classes from "./RecipeDetailPageBody.module.css";

import { motion } from "framer-motion";

const MotionRecipeIngredientsDisplay = motion(
  React.forwardRef(RecipeIngredientsDisplay)
);

const ingredientsContainerMotion = {
  appear: {
    transition: { delayChildren: 0.3, staggerChildren: 0.15 },
  },
};

const ingredientsMotion = {
  hidden: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
  },
};

function RecipeDetailPageBody(props) {
  const cartContext = useContext(cartCtx);

  const [userMessage, setUserMessage] = useState("");

  let recipe;

  if (props.recipesFetchResult.status === "success") {
    const recipeIndex = props.recipesFetchResult.recipes.findIndex(
      (recipe) => recipe.name === props.recipeName
    );
    if (recipeIndex === -1) {
      throw new Response("Not Found", { status: 404 });
    } else {
      recipe = props.recipesFetchResult.recipes[recipeIndex];
    }
  }

  function btnClickHandler() {
    if (recipe) {
      for (const ingredient of recipe.ingredients) {
        cartContext.addItem({
          name: ingredient,
          image: props.recipesFetchResult.ingredients[ingredient].image_url,
          price: props.recipesFetchResult.ingredients[ingredient].price,
        });
      }
      // TODO: check if adding items was successfull before sending the success message
      setUserMessage(
        ReactDOM.createPortal(
          <PopupMessage
            key={Math.random()}
            error={false}
            message="Products were successfully added to cart"
          />,
          document.getElementById("popup-msg")
        )
      );
    } else {
      setUserMessage(
        ReactDOM.createPortal(
          <PopupMessage
            key={Math.random()}
            error={true}
            message="An error occured. Try refreshing the page"
          />,
          document.getElementById("popup-msg")
        )
      );
    }
  }

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
        <Fragment>
          <div className={classes.recipe_detail_container}>
            <Link to="/Grocery-Store/recipes/" className={classes.link}>
              <motion.div
                className={classes.link_container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
              >
                <svg
                  className={classes.arrow_icon}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#090f1d"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m3 12l5 5m-5-5l5-5m-5 5h18"
                  />
                </svg>
                <span>Back To Recipes</span>
              </motion.div>
            </Link>
            <motion.h1
              className={classes.recipe_name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              {recipe.name}
            </motion.h1>
            <motion.img
              src={recipe.image_url}
              alt={recipe.name}
              className={classes.recipe_img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            />
            <motion.h2
              className={classes.ingredients_title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Ingredients
            </motion.h2>
            <motion.div
              className={classes.ingredients_container}
              initial="hidden"
              animate="appear"
              variants={ingredientsContainerMotion}
            >
              {recipe.ingredients.map((ingredient) => (
                <MotionRecipeIngredientsDisplay
                  variants={ingredientsMotion}
                  key={ingredient}
                  name={ingredient}
                  image={
                    props.recipesFetchResult.ingredients[ingredient].image_url
                  }
                  price={props.recipesFetchResult.ingredients[ingredient].price}
                />
              ))}
            </motion.div>
            <motion.div
              className={classes.total_price}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Total Price: <span>${recipe.totalPrice}</span>
            </motion.div>
            <motion.button
              className={classes.add_cart_btn}
              onClick={btnClickHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              whileHover={{ boxShadow: "inset -3px -3px #090f1d" }}
              whileTap={{ boxShadow: "inset -3px -3px #090f1d" }}
            >
              <svg
                className={classes.cart_icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#090f1d"
                  d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
                />
              </svg>
              <span>Add All To Cart</span>
            </motion.button>
          </div>

          {userMessage}
        </Fragment>
      )}
    </Fragment>
  );
}

export default RecipeDetailPageBody;
