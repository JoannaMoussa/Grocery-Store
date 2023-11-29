import { Fragment } from "react";

import { useOutletContext } from "react-router-dom";

import RecipesPageBody from "../components/Recipes/RecipesPageBody";
import Footer from "../components/Footer/Footer";

function RecipesPage() {
  const recipesFetchResult = useOutletContext();

  return (
    <Fragment>
      <RecipesPageBody recipesFetchResult={recipesFetchResult} />
      <Footer />
    </Fragment>
  );
}

export default RecipesPage;
