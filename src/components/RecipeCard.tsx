interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: string | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => (
  <div className="recipe-card shadow bg-[#EAFFDA] h-[350px] rounded-md pt-4 flex-shrink-0">
    <img src={recipe.image} alt={recipe.title} />
    <h2 className="text-[18px] leading-[22px] font-bold">{recipe.title}</h2>
    <p className="text-base font-medium">
      {recipe.summary.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100)}...
    </p>
  </div>
);

export default RecipeCard;
