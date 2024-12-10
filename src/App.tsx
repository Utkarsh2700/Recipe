import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { Link } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setRecipes(data.recipes);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return <Error message="Failed to fetch recipes. Try again later." />;

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Recipes</h1>
      <SearchBar recipes={recipes} setRecipes={setRecipes} />
      <div className="recipe-list flex flex-wrap w-full justify-between">
        {recipes.map((recipe) => (
          <Link
            className="w-full md:w-1/3 lg:w-1/4 mx-4 my-6 rounded-md"
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
