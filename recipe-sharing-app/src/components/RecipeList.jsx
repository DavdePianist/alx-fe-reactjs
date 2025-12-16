import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
