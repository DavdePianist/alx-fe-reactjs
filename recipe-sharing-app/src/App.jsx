import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filteredRecipes on app start
  useEffect(() => {
    filterRecipes();
  }, [recipes]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
