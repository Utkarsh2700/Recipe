const RecipeCard = ({ recipe }) => (
  <div className="recipe-card shadow bg-[#EAFFDA] h-[350px] rounded-md pt-4 flex-shrink-0">
    <img src={recipe.image} alt={recipe.title} />
    <h2 className="text-[18px] leading-[22px] font-bold">{recipe.title}</h2>
    <p className="text-base font-medium">
      {recipe.summary.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100)}...
    </p>
  </div>
);

export default RecipeCard;
