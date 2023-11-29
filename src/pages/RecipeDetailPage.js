import { Fragment } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import RecipeDetailPageBody from "../components/RecipeDetail/RecipeDetailPageBody";
import Footer from "../components/Footer/Footer";

function RecipeDetailPage() {
  const recipesFetchResult = useOutletContext();

  const { recipeName } = useParams();

  return (
    <Fragment>
      <RecipeDetailPageBody
        recipeName={recipeName}
        recipesFetchResult={recipesFetchResult}
      />
      <Footer />
    </Fragment>
  );
}

export default RecipeDetailPage;
