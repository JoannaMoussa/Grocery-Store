import ReactDOM from "react-dom";
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import LoadingIndicator from "../UI/LoadingIndicator";
import RecipesFetchError from "../Recipes/RecipesFetchError";
import RecipeIngredientsDisplay from "./RecipeIngredientsDisplay";
import PopupMessage from "../UI/PopupMessage";

import cartCtx from "../../store/cart-context";

import classes from "./RecipeDetailPageBody.module.css";

function RecipeDetailPageBody(props) {
  const cartContext = useContext(cartCtx);

  const [showPopupMessage, setShowPopupMessage] = useState(false);
  const [userMessage, setUserMessage] = useState();

  let recipe;

  if (props.recipesFetchResult.status === "success") {
    const recipeIndex = props.recipesFetchResult.recipes.findIndex(
      (recipe) => recipe.name === props.recipeName
    );
    recipe = props.recipesFetchResult.recipes[recipeIndex];
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
            error={false}
            message="Products were successfully added to cart"
          />,
          document.getElementById("popup-msg")
        )
      );
      setShowPopupMessage(true);
    } else {
      setUserMessage(
        ReactDOM.createPortal(
          <PopupMessage
            error={true}
            message="An error occured. Try refreshing the page"
          />,
          document.getElementById("popup-msg")
        )
      );
      setShowPopupMessage(true);
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
            <div className={classes.link_container}>
              <svg
                className={classes.arrow_icon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#090f1d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m3 12l5 5m-5-5l5-5m-5 5h18"
                />
              </svg>
              <Link to="/Grocery-Store/recipes/">Back To Recipes</Link>
            </div>
            <h1 className={classes.recipe_name}>{recipe.name}</h1>
            <img
              src={recipe.image_url}
              alt={recipe.name}
              className={classes.recipe_img}
            />
            <h2 className={classes.ingredients_title}>Ingredients</h2>
            <div className={classes.ingredients_container}>
              {recipe.ingredients.map((ingredient) => (
                <RecipeIngredientsDisplay
                  key={ingredient}
                  name={ingredient}
                  image={
                    props.recipesFetchResult.ingredients[ingredient].image_url
                  }
                  price={props.recipesFetchResult.ingredients[ingredient].price}
                />
              ))}
            </div>
            <div className={classes.total_price}>
              Total Price: <span>${recipe.totalPrice}</span>
            </div>
            <button className={classes.add_cart_btn} onClick={btnClickHandler}>
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
            </button>
          </div>
          {showPopupMessage && userMessage}
        </Fragment>
      )}
    </Fragment>
  );
}

export default RecipeDetailPageBody;
