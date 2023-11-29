import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import RecipesFetch from "./components/Recipes/RecipesFetch";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

const router = createBrowserRouter([
  {
    path: "/Grocery-Store/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      {
        path: "recipes",
        element: <RecipesFetch />,
        children: [
          { index: true, element: <RecipesPage /> },
          { path: ":recipeName", element: <RecipeDetailPage /> },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
