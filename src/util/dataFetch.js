export async function fetchIngredients({ signal }) {
  const response = await fetch(
    "https://grocery-store-7d880-default-rtdb.europe-west1.firebasedatabase.app/store/ingredients.json",
    { signal }
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const ingredients = await response.json();

  return ingredients;
}
