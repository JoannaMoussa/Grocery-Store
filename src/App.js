import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/Grocery-Store",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "shop", element: <ShopPage /> },
      // {
      //   path: "recipes",
      //   element: <RecipesPage />,
      //   children: [{ path: ":eventId", element: <RecipeDetailPage /> }],
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
