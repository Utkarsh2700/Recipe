import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

interface RecipeDetails {
  title: string;
  image: string;
  extendedIngredients: [{ original: string | number; id: number | string }];
  readyInMinutes: string;
  instructions: string;
  analyzedInstructions: [
    {
      name?: string;
      steps: [
        {
          step: string;
        }
      ];
    }
  ];
}

const RecipeDetails = () => {
  const { id } = useParams();
  const [recepie_details, setRecipe_details] = useState<RecipeDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setRecipe_details(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return <Error message="Failed to fetch recipe details. Try again later." />;

  return (
    <div className="w-full text-[#C7C7A6]">
      <h1 className="text-4xl font-semibold mb-4 text-start">
        {recepie_details?.title}
      </h1>
      <div className="flex flex-col md:flex-row lg:justify-center">
        <img
          className="rounded-md"
          src={recepie_details?.image}
          alt={recepie_details?.title}
        />
        <div className="lg:ml-4">
          <h2 className="text-2xl font-semibold text-start mt-4 mb-2">
            Ingredients
          </h2>
          <ul className="ml-8 list-disc mb-2">
            {recepie_details?.extendedIngredients.map((ingredient) => (
              <li className="font-medium text-start" key={ingredient?.id}>
                {ingredient?.original}
              </li>
            ))}
          </ul>
          <span className="flex items-center">
            <span className="text-xl">Time to cook :</span>
            <h2 className="text-xl font-bold ml-1">
              {recepie_details?.readyInMinutes}
            </h2>
            <span className="text-xl font-bold ml-1">Minutes</span>
          </span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-start mt-4 mb-2">
        Instructions
      </h2>
      <p className="font-medium text-start">{recepie_details?.instructions}</p>
      <h2 className="text-2xl font-semibold text-start mt-4 mb-2">Steps</h2>
      <ol className="ml-8 list-decimal mb-2">
        {recepie_details?.analyzedInstructions[0].steps.map((step, index) => (
          <li className="font-medium text-start" key={index}>
            {step.step}
          </li>
        ))}
      </ol>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
