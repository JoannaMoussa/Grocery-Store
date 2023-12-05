// using createHashRouter instead of createBrowserRouter for Github Pages to work with react-router-dom
import { RouterProvider, createHashRouter } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import RecipesFetch from "./components/Recipes/RecipesFetch";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

const router = createHashRouter([
  {
    path: "/Grocery-Store/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
