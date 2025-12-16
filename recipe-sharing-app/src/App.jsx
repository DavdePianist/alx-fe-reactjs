import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
