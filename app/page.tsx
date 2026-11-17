
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <h1>Find Your Next Bite!</h1>
      <p>Discover delicious recipes from around the world.</p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
