import { useQuery } from "@tanstack/react-query";

import { fetchIngredients } from "../util/dataFetch";

import ShopPageWrapper from "../components/Layout/ShopPageWrapper";
import { CartDisplayCtxProvider } from "../store/cartDisplay-context";
import IngredientsDisplay from "../components/Ingredients/IngredientsDisplay";
import Cart from "../components/Cart/Cart";
import SwitchButtons from "../components/UI/SwitchButtons";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorBlock from "../components/UI/ErrorBlock";

function ShopPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
    staleTime: 5000,
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock message={error.message} />;
  }

  const ingredients = [];
  if (data) {
    for (const key in data) {
      ingredients.push({
        name: key,
        show: true,
        ...data[key],
      });
    }
    content = <IngredientsDisplay ingredients={ingredients} />;
  }

  return (
    <ShopPageWrapper>
      <CartDisplayCtxProvider>
        {content}
        <Cart />
        <SwitchButtons />
      </CartDisplayCtxProvider>
    </ShopPageWrapper>
  );
}

export default ShopPage;
