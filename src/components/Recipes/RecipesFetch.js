import { Outlet } from "react-router-dom";
import { fetchIngredients } from "../../util/dataFetch";
import { fetchRecipes } from "../../util/dataFetch";
import { useQuery } from "@tanstack/react-query";

function RecipesFetch() {
  const {
    data: recipesData,
    isPending: recipesIsPending,
    isError: recipesIsError,
    error: recipesError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
    staleTime: 5000,
  });
  // fetching the ingredients to calculate total recipe price
  const {
    data: ingredientsData,
    isPending: ingredientsIsPending,
    isError: ingredientsIsError,
    error: ingredientsError,
  } = useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
    staleTime: 5000,
  });

  let recipesFetchResult;

  if (recipesIsError || ingredientsIsError) {
    recipesFetchResult = {
      status: "error",
      error: recipesError || ingredientsError,
    };
  } else if (recipesIsPending || ingredientsIsPending) {
    recipesFetchResult = { status: "pending" };
  } else if (recipesData && ingredientsData) {
    const recipes = [];
    for (const key in recipesData) {
      let totalPrice = 0;
      for (const ingredient of recipesData[key].ingredients) {
        totalPrice += ingredientsData[ingredient].price;
      }
      recipes.push({
        name: key,
        totalPrice: totalPrice,
        ...recipesData[key],
      });
      recipesFetchResult = {
        status: "success",
        recipes: recipes,
        ingredients: ingredientsData,
      };
    }
  } else {
    recipesFetchResult = {
      status: "error",
      message: "Oops, Something went wrong! Try refreshing the page.",
    };
  }
  return <Outlet context={recipesFetchResult} />;
}

export default RecipesFetch;
