import { useQuery } from "@tanstack/react-query";

import { fetchIngredients } from "../util/dataFetch";

import ShopPageWrapper from "../components/Layout/ShopPageWrapper";
import { CartDisplayCtxProvider } from "../store/cartDisplay-context";
import IngredientsDisplay from "../components/Ingredients/IngredientsDisplay";
import Cart from "../components/Cart/Cart";
import SwitchButtons from "../components/SwitchButtons";

function ShopPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
    staleTime: 5000,
  });

  if (isPending) {
    console.log("pending");
  }

  if (isError) {
    console.log(error.message);
  }

  if (data) {
    const ingredientsFetched = [];
    for (const key in data) {
      ingredientsFetched.push({
        name: key,
        ...data[key],
      });
    }
    console.log(ingredientsFetched);
  }

  return (
    <ShopPageWrapper>
      <CartDisplayCtxProvider>
        <IngredientsDisplay />
        <Cart />
        <SwitchButtons />
      </CartDisplayCtxProvider>
    </ShopPageWrapper>
  );
}

export default ShopPage;
