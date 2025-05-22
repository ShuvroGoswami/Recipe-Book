import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import AddRecipes from "./AddRecipes";
import MyRecipes from "./MyRecipes";
import AllRecipe from "./AllRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <p>error</p>,
    children: [
        {
            index: true,
            path: '/',
            loader:()=> fetch('http://localhost:3000/recipes'),
            Component: Home,
        },
        {
            path:'/recipesDetails/:id',
            loader:()=>fetch('/recipes.json'),
            Component: RecipeDetails,
        },
        {
          path: '/allrecipe',
          Component: AllRecipe,
        },
        {
          path: '/addrecipes',
          Component: AddRecipes
        },
        {
          path: '/myrecipes',
          loader:()=> fetch('http://localhost:3000/recipes'),
          Component: MyRecipes
        }
    ]
  },
]);

export default router;