import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import AddRecipes from "./AddRecipes";
import MyRecipes from "./MyRecipes";
import AllRecipe from "./AllRecipe";
import UpdateRecipe from "./UpdateRecipe";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            loader:()=> fetch('https://b11a10-server-side-shuvro-goswami.vercel.app/recipes'),
            Component: Home,
        },
        {
            path:'recipesDetails/:id',
            loader:({params})=>fetch(`https://b11a10-server-side-shuvro-goswami.vercel.app/recipes/${params.id}`),
            // Component: RecipeDetails,
            element: <PrivateRoute>
              <RecipeDetails></RecipeDetails>
            </PrivateRoute>
        },
        {
          path: '/allrecipe',
           loader:()=> fetch('https://b11a10-server-side-shuvro-goswami.vercel.app/recipes'),
          Component: AllRecipe,
        },
        {
          path: '/addrecipes',
          // Component: AddRecipes
          element: <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        },
        {
          path: '/myrecipes',
          loader:()=> fetch('https://b11a10-server-side-shuvro-goswami.vercel.app/recipes'),
          // Component: MyRecipes
          element: <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        },
        {
          path: 'updateRecipe/:id',
          loader: ({params}) => fetch(`https://b11a10-server-side-shuvro-goswami.vercel.app/recipes/${params.id}`),
          Component: UpdateRecipe,
        },
        {
                path: '/login',
                Component: Login,
              },
              {
                path: "/register",
                Component: Register,
              },
              {
                path: '/profile',
                Component: Profile
              }
    ]
  },
]);

export default router;