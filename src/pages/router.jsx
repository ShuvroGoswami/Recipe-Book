import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import AddRecipes from "./AddRecipes";
import MyRecipes from "./MyRecipes";
import AllRecipe from "./AllRecipe";
import UpdateRecipe from "./UpdateRecipe";

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
            path:'recipesDetails/:id',
            loader:({params})=>fetch(`http://localhost:3000/recipes/${params.id}`),
            Component: RecipeDetails,
        },
        {
          path: '/allrecipe',
           loader:()=> fetch('http://localhost:3000/recipes'),
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
        },
        {
          path: 'updateRecipe/:id',
          loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
          Component: UpdateRecipe,
        }
    ]
  },
]);

export default router;