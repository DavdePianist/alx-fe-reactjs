import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],                  // existing recipes array
  searchTerm: '',               // new state for search input
  filteredRecipes: [],          // new state for filtered results

  // Action to set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Existing actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
