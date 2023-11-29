export async function fetchIngredients({ signal }) {
  const response = await fetch(
    "https://grocery-store-7d880-default-rtdb.europe-west1.firebasedatabase.app/store/ingredients.json",
    { signal }
  );

  if (!response.ok) {
    throw new Error("Oops, Something went wrong! Try refreshing the page.");
  }

  const ingredients = await response.json();

  return ingredients;
}

export async function fetchRecipes({ signal }) {
  const response = await fetch(
    "https://grocery-store-7d880-default-rtdb.europe-west1.firebasedatabase.app/store/recipes.json",
    { signal }
  );

  if (!response.ok) {
    throw new Error("Oops, Something went wrong! Try refreshing the page.");
  }
  const recipes = await response.json();

  return recipes;
}
