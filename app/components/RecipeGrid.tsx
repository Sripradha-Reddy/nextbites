
"use client";

import { useState } from "react";
import Link from "next/link";
import { Recipe } from "../data/recipes";

export default function RecipeGrid({
  recipes
}: {
  recipes: Recipe[];
}) {
  const [query, setQuery] = useState("");

  const visible = recipes.filter((recipe) =>
    (recipe.title + " " + recipe.cuisine)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes or cuisines..."
      />

      {visible.length === 0 ? (
        <p>No recipes match your search. Try another search.</p>
      ) : (
        <div className="grid">
          {visible.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipe/${recipe.id}`}
            >
              <h2>{recipe.title}</h2>
              <p>{recipe.cuisine}</p>
              <p>View Recipe →</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
