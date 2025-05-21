import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipes from "./pages/AddRecipes";
import MyRecipes from "./pages/MyRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <p>error</p>,
    children: [
        {
            index: true,
            path: '/',
            loader:()=>fetch('/recipes.json'),
            Component: Home,
        },
        {
            path:'/recipesDetails/:id',
            loader:()=>fetch('/recipes.json'),
            Component: RecipeDetails,
        },{
          path: '/addrecipes',
          Component: AddRecipes
        },
        {
          path: '/myrecipes',
          Component: MyRecipes
        }
    ]
  },
]);

export default router;